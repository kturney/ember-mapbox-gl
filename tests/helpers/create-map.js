import { Promise } from 'rsvp';
import Config from '../../config/environment';
import QUnit from 'qunit';
import { get } from '@ember/object';

const ALLOWED_ERRORS = [
  'The operation was aborted',
  'Failed to fetch'
];

export default function setupMap(hooks) {
  hooks.before(async function() {
    const MapboxGl = await import('mapbox-gl');
    this.MapboxGl = MapboxGl.default;
    this.MapboxGl.accessToken = Config['mapbox-gl'].accessToken;

    await new Promise((resolve) => {
      this._mapContainer = document
        .querySelector(Config.APP.rootElement)
        .appendChild(document.createElement('div'));

      this.map = new this.MapboxGl.Map({
        container: this._mapContainer,
        style: Config['mapbox-gl'].map.style
      });

      this.map.style.once('data', () => resolve());

      const onErr = (ev) => {
        const err = {
          message: get(ev, 'error.message') || 'unknown mapbox error',
          event: ev,
          stack: get(ev, 'error.stack')
        };

        if (ALLOWED_ERRORS.includes(err.message)) {
          // eslint-disable-next-line no-console
          console.error(err.message, ev.error);
        } else {
          QUnit.onUnhandledRejection(err);
        }
      };

      this.map.style.on('error', onErr);
      this.map.on('error', onErr);
    });
  });

  hooks.after(function() {
    this.map.remove();
    this._mapContainer.parentElement.removeChild(this._mapContainer);
  });
}
