import { Promise } from 'rsvp';
import Config from '../../config/environment';
import MapboxGl from 'mapbox-gl';
import QUnit from 'qunit';

MapboxGl.accessToken = Config['mapbox-gl'].accessToken;

export default function setupMap(hooks) {
  hooks.before(function() {
    return new Promise((resolve) => {
      this._mapContainer = document
        .querySelector(Config.APP.rootElement)
        .appendChild(document.createElement('div'));

      this.map = new MapboxGl.Map({
        container: this._mapContainer,
        style: Config['mapbox-gl'].map.style
      });

      this.map.style.once('data', () => resolve());

      const onErr = (data) => {
        QUnit.onUnhandledRejection((data && data.error) || data || 'Empty error event from mapbox-gl-js');
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
