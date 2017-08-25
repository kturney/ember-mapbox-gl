import Ember from 'ember';
import layout from '../templates/components/mapbox-gl-popup';
import MapboxGl from 'mapbox-gl';

const {
  assign,
  Component,
  get,
  getProperties,
  getOwner,
  run
} = Ember;

export default Component.extend({
  layout,
  tagName: '',

  map: null,
  marker: null,
  lngLat: null,
  initOptions: null,

  onClose: null,

  init() {
    this._super(...arguments);

    const { initOptions, marker } = getProperties(this, 'initOptions', 'marker');

    this.domContent = document.createElement('div');
    this._onClose = run.bind(this, this.sendAction, 'onClose');
    const options = assign({},
      get(getOwner(this).resolveRegistration('config:environment'), 'mapbox-gl.popup'),
      initOptions);

    this.popup = new MapboxGl.Popup(options)
      .setDOMContent(this.domContent)
      .on('close', this._onClose);

    if (marker === null) {
      this.popup.addTo(this.map);
    } else {
      marker.setPopup(this.popup);
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const lngLat = get(this, 'lngLat');

    if (lngLat) {
      this.popup.setLngLat(lngLat);
    }
  },

  willDestroy() {
    this._super(...arguments);

    this.popup.off('close', this._onClose);
    const marker = get(this, 'marker');

    if (marker === null) {
      this.popup.remove();
    } else {
      marker.setPopup(null);
    }
  }
});
