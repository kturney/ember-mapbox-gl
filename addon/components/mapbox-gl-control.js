import Ember from 'ember';

const {
  Component,
  get,
  getProperties
} = Ember;

const MapboxGlControlComponent = Component.extend({
  tagName: '',

  map: null,
  control: null,
  position: null,

  init() {
    this._super(...arguments);

    this.hasAdded = false;
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const { control, position } = getProperties(this, 'control', 'position');

    if (this.hasAdded) {
      this.map.removeControl(control);
    }

    this.map.addControl(control, position);
    this.hasAdded = true;
  },

  willDestroy() {
    this._super(...arguments);

    if (this.hasAdded) {
      this.map.removeControl(get(this, 'control'));
    }
  }
});

MapboxGlControlComponent.reopenClass({
  positionalParams: [ 'control', 'position' ]
});

export default MapboxGlControlComponent;
