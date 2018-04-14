import { assign } from '@ember/polyfills';
import { getOwner } from '@ember/application';
import { getProperties, get, computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { reads } from '@ember/object/computed';
import Component from '@ember/component';

/**
 * A utility that brokers HTTP requests...
 *
 * @class MapboxGlLayer
 */
export default Component.extend({
  tagName: '',

  map: null,

  /**
   * @property map
   * @type {Object}
   * @description The style layer to add, conforming to the Mapbox Style Specification's layer definition.
   * {@link https://www.mapbox.com/mapbox-gl-js/api/#map#addlayer Mapbox}
  */
  layer: null,

  /**
   * @property layer
   * @type {String}
   * @description The ID of an existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
   * {@link https://www.mapbox.com/mapbox-gl-js/api/#map#addlayer Mapbox}
  */
  before: null,

  /**
   * @property _sourceId
   * @private for use by mapbox-gl-source to pass in its sourceId
   */
  _sourceId: reads('layer.source'),

  /**
   * @property _layerId
   * @private
   */
  _layerId: computed('layer.id', function() {
    return get(this, 'layer.id') || guidFor(this);
  }).readOnly(),

  /**
   * @property _layerType
   * @private
   */
  _layerType: computed('layer.type', function() {
    return get(this, 'layer.type') || 'line';
  }).readOnly(),

  _envConfig: computed('_layerType', function() {
    const layerType = get(this, '_layerType');
    return get(getOwner(this).resolveRegistration('config:environment'), `mapbox-gl.${layerType}`);
  }).readOnly(),

  _layout: computed('_envConfig.layout', 'layer.layout', function() {
    return assign({},
      get(this, '_envConfig.layout'),
      get(this, 'layer.layout'));
  }).readOnly(),

  _paint: computed('_envConfig.paint', 'layer.paint', function() {
    return assign({},
      get(this, '_envConfig.paint'),
      get(this, 'layer.paint'));
  }).readOnly(),

  _layer: computed('layer', '_layerId', '_layerType', '_sourceId', '_layout', '_paint', function() {
    const {
      layer,
      _layerId,
      _layerType,
      _sourceId,
      _layout,
      _paint
    } = getProperties(this, 'layer', '_layerId', '_layerType', '_sourceId', '_layout', '_paint');

    const computedLayer = {
      id: _layerId,
      type: _layerType,
      source: _sourceId,
      layout: _layout,
      paint: _paint
    };

    // do this to pick up other properties like filter, re, metadata, source-layer, minzoom, maxzoom, etc
    return assign({}, layer, computedLayer);
  }),

  init() {
    this._super(...arguments);

    const { _layer, before } = getProperties(this, '_layer', 'before');

    this.map.addLayer(_layer, before);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const _layer = get(this, '_layer');

    for (const k in _layer.layout) {
      this.map.setLayoutProperty(_layer.id, k, _layer.layout[k]);
    }

    for (const k in _layer.paint) {
      this.map.setPaintProperty(_layer.id, k, _layer.paint[k]);
    }

    if ('filter' in _layer) {
      this.map.setFilter(_layer.id, _layer.filter);
    }

    this.map.setLayerZoomRange(_layer.id, _layer.minzoom, _layer.maxzoom);
  },

  willDestroy() {
    this._super(...arguments);

    this.map.removeLayer(get(this, '_layerId'));
  }
});
