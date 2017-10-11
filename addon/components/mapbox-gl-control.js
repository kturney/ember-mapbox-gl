import { getProperties } from '@ember/object';
import Component from '@ember/component';

const MapboxGlControlComponent = Component.extend({
  tagName: '',

  map: null,
  control: null,
  position: null,

  init() {
    this._super(...arguments);

    this.hasAdded = false;
    this._prevControl = null;
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const { control, position } = getProperties(this, 'control', 'position');

    if (this._prevControl !== null) {
      this.map.removeControl(this._prevControl);
    }

    if (control) {
      this.map.addControl(control, position);
      this._prevControl = control;
    } else {
      this._prevControl = null;
    }
  },

  willDestroy() {
    this._super(...arguments);

    if (this._prevControl !== null) {
      this.map.removeControl(this._prevControl);
    }
  }
});

MapboxGlControlComponent.reopenClass({
  positionalParams: [ 'control', 'position' ]
});

export default MapboxGlControlComponent;
