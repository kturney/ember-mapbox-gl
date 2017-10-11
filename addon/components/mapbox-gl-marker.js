import { assert } from '@ember/debug';
import { assign } from '@ember/polyfills';
import { getOwner } from '@ember/application';
import { getProperties, get, set } from '@ember/object';
import { run } from '@ember/runloop';
import Component from '@ember/component';
import layout from '../templates/components/mapbox-gl-marker';
import MapboxGl from 'mapbox-gl';

export default Component.extend({
  layout,

  map: null,
  initOptions: null,
  lngLat: null,

  init() {
    this._super(...arguments);

    this.marker = null;
  },

  didInsertElement() {
    this._super(...arguments);

    run.scheduleOnce('afterRender', this, this._setup);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    if (this.marker !== null) {
      const lngLat = get(this, 'lngLat');
      assert('mapbox-gl-marker requires lngLat, maybe you passed latLng?', lngLat);

      this.marker.setLngLat(lngLat);
    }
  },

  willDestroy() {
    this._super(...arguments);

    if (this.marker !== null) {
      this.marker.remove();
    }
  },

  _setup() {
    const { lngLat, initOptions } = getProperties(this, 'lngLat', 'initOptions');

    assert('mapbox-gl-marker requires lngLat, maybe you passed latLng?', lngLat);

    const options = assign({},
      get(getOwner(this).resolveRegistration('config:environment'), 'mapbox-gl.marker'),
      initOptions);

    const marker = new MapboxGl.Marker(this.element, options)
      .setLngLat(lngLat)
      .addTo(this.map);

    set(this, 'marker', marker);
  }
});
