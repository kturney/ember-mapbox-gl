import { assign } from '@ember/polyfills';
import { computed, get, set } from '@ember/object';
import { getOwner } from '@ember/application';
import { bind, next } from '@ember/runloop';
import Component from '@ember/component';
import layout from '../templates/components/mapbox-gl';
import noop from 'ember-mapbox-gl/utils/noop';
import MapboxLoader from 'ember-mapbox-gl/-private/mapbox-loader';

/**
  Component that creates a new [mapbox-gl-js instance](https://www.mapbox.com/mapbox-gl-js/api/#map):

  ```hbs
  {{#mapbox-gl initOptions=initOptions mapLoaded=(action 'mapLoaded') as |map|}}

  {{/mapbox-gl}}
  ```

  @class MapboxGL
  @yield {Hash} map
  @yield {Component} map.call
  @yield {Component} map.control
  @yield {Component} map.image
  @yield {Component} map.layer
  @yield {Component} map.marker
  @yield {Component} map.on
  @yield {Component} map.popup
  @yield {Component} map.source
*/
export default Component.extend({
  layout,

  /**
    An options hash to pass on to the [mapbox-gl-js instance](https://www.mapbox.com/mapbox-gl-js/api/).
    This is only used during map construction, and updates will have no effect.

    @argument initOptions
    @type {Object}
  */
  initOptions: null,

  /**
    An action function to call when the map has finished loading. Note that the component does not yield until the map has loaded,
    so this is the only way to listen for the mapbox load event.

    @argument mapLoaded
    @type {Function}
  */
  mapLoaded: noop,

  _loader: MapboxLoader,
  _isMapLoaded: false,
  _glSupported: computed('_loader.Mapbox', function() {
    const Mapbox = get(this, '_loader.Mapbox');
    if (Mapbox) {
      return Mapbox.supported();
    }
  }).readOnly(),

  _map: computed('_loader.Mapbox', 'element', function() {
    const Mapbox = get(this, '_loader.Mapbox');
    const { element } = this;
    if (Mapbox && element) {
      const config = get(getOwner(this).resolveRegistration('config:environment'), 'mapbox-gl.map');
      const options = assign({}, config, get(this, 'initOptions'));
      options.container = element;

      const map = new Mapbox.Map(options);
      map.once('load', bind(this, this._onLoad, map));
      return map;
    }
  }).readOnly(),

  init() {
    this._super(...arguments);

    MapboxLoader.load(getOwner(this).resolveRegistration('config:environment')['mapbox-gl']);
  },

  willDestroy() {
    this._super(...arguments);

    if (this._isMapLoaded) {
      const map = get(this, '_map');
      // some map users may be late doing cleanup (seen with mapbox-draw-gl), so don't remove the map until the next tick
      next(map, map.remove);
    }
  },

  _onLoad(map) {
    if (this.isDestroyed || this.isDestroying) {
      map.remove();
      return;
    }

    this.mapLoaded(map);

    set(this, '_isMapLoaded', true);
  }
});
