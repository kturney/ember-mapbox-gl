import Ember from 'ember';
import layout from '../templates/components/mapbox-gl';
import MapboxGl from 'mapbox-gl';

const {
  assign,
  assert,
  Component,
  get,
  getOwner,
  run
} = Ember;

export default Component.extend({
  layout,

  initOptions: null,
  mapLoaded() {},

  init() {
    this._super(...arguments);

    this.map = null;
    this.glSupported = MapboxGl.supported();

    const mbglConfig = getOwner(this).resolveRegistration('config:environment')['mapbox-gl'];
    assert('mapbox-gl config is required in config/environment', mbglConfig);
    assert('mapbox-gl config must have an accessToken string', typeof mbglConfig.accessToken === 'string');

    MapboxGl.accessToken = mbglConfig.accessToken;
  },

  didInsertElement() {
    this._super(...arguments);

    if (this.glSupported) {
      run.scheduleOnce('afterRender', this, this._setup);
    }
  },

  willDestroy() {
    this._super(...arguments);

    if (this.map !== null) {
      this.map.remove();
    }
  },

  _setup() {
    const mbglConfig = getOwner(this).resolveRegistration('config:environment')['mapbox-gl'];
    const options = assign({}, mbglConfig.map, get(this, 'initOptions'));
    options.container = this.element;

    const map = new MapboxGl.Map(options);
    map.once('load', run.bind(this, this._onLoad, map));
  },

  _onLoad(map) {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    this.mapLoaded(map);

    this.set('map', map);
  }
});
