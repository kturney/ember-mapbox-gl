import { bind, next } from '@ember/runloop';
import EmberObject, { get, set } from '@ember/object';
import { Promise as RsvpPromise } from 'rsvp';

class MapboxLoaderCancelledError extends Error {}
class MapboxSupportError extends Error {
  isMapboxSupportError = true;
}
class MapboxError extends Error {
  constructor(ev) {
    super(get(ev, 'error.message') || 'unknown mapbox error');

    this.event = ev;
  }
}

export default EmberObject.extend({
  map: null,
  error: null,
  MapboxGl: null,
  isLoaded: false,

  _accessToken: null,
  _mapOptions: null,
  _extOnMapLoaded: null,
  _isCancelled: false,
  _isLoading: false,

  load(accessToken, options, onMapLoaded) {
    if (this.isLoaded || this._isLoading || this._isCancelled) {
      return;
    }

    this._isLoading = true;
    this._accessToken = accessToken;
    this._mapOptions = options;
    this._extOnMapLoaded = onMapLoaded;

    import('mapbox-gl')
      .then(bind(this, this._onModule))
      .then(bind(this, this._onMapLoaded))
      .then(bind(this, this._onComplete))
      .catch(bind(this, this._onError));
  },

  cancel() {
    this._isCancelled = true;

    if (this.map !== null) {
      // some map users may be late doing cleanup (seen with mapbox-draw-gl),
      // so don't remove the map until the next tick
      next(this.map, this.map.remove);
    }
  },

  _onModule(MapboxGl) {
    if (this._isCancelled) {
      throw new MapboxLoaderCancelledError();
    }

    this.MapboxGl = MapboxGl.default;
    this.MapboxGl.accessToken = this._accessToken;

    if (!this.MapboxGl.supported()) {
      throw new MapboxSupportError('mapbox-gl not supported in current browser');
    }

    const map = this.map = new this.MapboxGl.Map(this._mapOptions);

    return new RsvpPromise((resolve, reject) => {
      const listeners = {
        onLoad() {
          map.off('load', listeners.onLoad);
          map.off('error', listeners.onError);
          resolve();
        },
        onError(ev) {
          map.off('load', listeners.onLoad);
          map.off('error', listeners.onError);

          reject(new MapboxError(ev));
        }
      };

      map.on('load', listeners.onLoad);
      map.on('error', listeners.onError);
    });
  },

  _onMapLoaded() {
    if (this._isCancelled) {
      throw new MapboxLoaderCancelledError();
    }

    if (typeof this._extOnMapLoaded === 'function') {
      return this._extOnMapLoaded(this.map);
    }

    return null;
  },

  _onComplete() {
    this._isLoading = false;

    if (this._isCancelled) {
      return;
    }

    set(this, 'isLoaded', true);
  },

  _onError(err) {
    this._isLoading = false;

    if (err instanceof MapboxLoaderCancelledError) {
      return;
    }

    if (this._isCancelled) {
      console.error(err); // eslint-disable-line no-console
      return;
    }

    set(this, 'error', err);
  },
});
