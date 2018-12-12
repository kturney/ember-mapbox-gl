import { resolve } from 'rsvp';
import EmberObject, { setProperties } from '@ember/object';

export default EmberObject.create({
  isLoaded: false,
  Mapbox: null,

  load(config = {}) {
    if (this.isLoaded) {
      return resolve();
    }

    return import('mapbox-gl')
      .then((module) => {
        if ('accessToken' in  config) {
          module.default.accessToken = config.accessToken;
        }

        setProperties(this, {
          Mapbox: module.default,
          isLoaded: true
        });
      });
  }
});
