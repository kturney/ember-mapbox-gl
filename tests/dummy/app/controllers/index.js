import Controller from '@ember/controller';
import { run } from '@ember/runloop';

export default Controller.extend({
  wanderDrone: 'https://wanderdrone.appspot.com',
  curLocation: null,

  init() {
    this._super(...arguments);

    this.curRun = run.later(this, this._updateWanderDrone, 1000);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        run(this, this.set, 'curLocation', [
          position.coords.longitude,
          position.coords.latitude,
        ]);
      });
    }
  },

  willDestroy() {
    this._super(...arguments);
    run.cancel(this.curRun);
  },

  _updateWanderDrone() {
    this.notifyPropertyChange('wanderDrone'); // note that mapbox will reload the url everytime it is set as the data
    this.curRun = run.later(this, this._updateWanderDrone, 1000);
  },

  onClick(ev) {
    console.log('onClick', ev); // eslint-disable-line no-console
  },
});
