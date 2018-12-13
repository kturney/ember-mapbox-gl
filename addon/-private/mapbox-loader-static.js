import { resolve } from 'rsvp';
import EmberObject, { setProperties } from '@ember/object';
import Mapbox from 'mapbox-gl';

export default EmberObject.create({
  isLoaded: false,
  Mapbox: null,

  load(config = {}) {
    if (!this.isLoaded) {
      if ('accessToken' in  config) {
        Mapbox.accessToken = config.accessToken;
      }

      setProperties(this, {
        Mapbox: Mapbox,
        isLoaded: true
      });
    }

    return resolve();
  }
})
