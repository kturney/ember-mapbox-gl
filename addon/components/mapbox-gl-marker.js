import { assert } from '@ember/debug';
import { assign } from '@ember/polyfills';
import { getOwner } from '@ember/application';
import Component from '@ember/component';
import layout from '../templates/components/mapbox-gl-marker';

/**
 * A utility that brokers HTTP requests...
 *
 * @class MapboxGlMarker
 */
export default Component.extend({
  layout,
  tagName: '',

  MapboxGl: null,
  map: null,
  initOptions: null,
  lngLat: null,

  init() {
    this._super(...arguments);

    this.domContent = document.createElement('div');
    const { lngLat, initOptions } = this;

    assert('mapbox-gl-marker requires lngLat, maybe you passed latLng?', lngLat);

    const options = assign({},
      (getOwner(this).resolveRegistration('config:environment')['mapbox-gl'] ?? {}).marker,
      initOptions);

    this.marker = new this.MapboxGl.Marker(this.domContent, options)
      .setLngLat(lngLat)
      .addTo(this.map);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const lngLat = this.lngLat;
    assert('mapbox-gl-marker requires lngLat, maybe you passed latLng?', lngLat);

    this.marker.setLngLat(lngLat);
  },

  willDestroy() {
    this._super(...arguments);

    this.marker.remove();
  }
});
