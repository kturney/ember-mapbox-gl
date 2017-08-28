import Ember from 'ember';

const {
  assign,
  Component,
  computed,
  deprecate,
  get,
  getOwner,
  getProperties,
  guidFor
} = Ember;

export default Component.extend({
  tagName: '',

  map: null,

  /**
   * @param object
   * @description The style layer to add, conforming to the Mapbox Style Specification's layer definition.
   * {@link https://www.mapbox.com/mapbox-gl-js/api/#map#addlayer Mapbox}
  */
  layer: null,

  /**
   * @param string
   * @description The ID of an existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array.
   * {@link https://www.mapbox.com/mapbox-gl-js/api/#map#addlayer Mapbox}
  */
  before: null,

  /**
    * @deprecated in favor of `layer.type`
  */
  layerType: null,

  /**
    * @deprecated in favor of `layer.layout`
  */
  layoutOptions: null,

  /**
    * @deprecated in favor of `layer.paint`
  */
  paintOptions: null,

  /**
    * @deprecated in favor of `layer.source`
  */
  sourceId: null,

  /**
   * @private for use by mapbox-gl-source to pass in its sourceId
   */
  _sourceId: computed('layer.source', 'sourceId', function() {
    return get(this, 'layer.source') || get(this, 'sourceId');
  }),

  /**
   * @private
   */
  _layerId: computed('layer.id', function() {
    return get(this, 'layer.id') || guidFor(this);
  }),

  init() {
    this._super(...arguments);

    const {
      _layerId,
      _sourceId,
      layer,
      before,

      // All of these properties are deprecated, but remain for backwards compatibility
      sourceId,
      layerType,
      layoutOptions,
      paintOptions
    } = getProperties(this, '_layerId', '_sourceId', 'layer', 'before', 'sourceId', 'layerType', 'layoutOptions', 'paintOptions');

    deprecate('Use of `sourceId` is deprecated in favor of `layer.source`', sourceId === null, {
      id: 'ember-mapbox-gl.mapbox-gl-layer',
      until: '1.0.0'
    });

    deprecate('Use of `layerType` is deprecated in favor of `layer.type`', layerType === null, {
      id: 'ember-mapbox-gl.mapbox-gl-layer',
      until: '1.0.0'
    });

    deprecate('Use of `layoutOptions` is deprecated in favor of `layer.layout`', layoutOptions === null, {
      id: 'ember-mapbox-gl.mapbox-gl-layer',
      until: '1.0.0'
    });

    deprecate('Use of `paintOptions` is deprecated in favor of `layer.paint`', paintOptions === null, {
      id: 'ember-mapbox-gl.mapbox-gl-layer',
      until: '1.0.0'
    });

    const lType = (layer && layer.type) || layerType || 'line';

    // Check for config from evironment
    const envConfig = get(getOwner(this).resolveRegistration('config:environment'), `mapbox-gl.${lType}`) || {};

    const combinedLayer = {
      id: _layerId,
      type: lType,
      source: _sourceId,
      layout: assign({}, envConfig.layout, (layer && layer.layout) || layoutOptions),
      paint: assign({}, envConfig.paint, (layer && layer.paint) || paintOptions)
    };

    this.map.addLayer(combinedLayer, before);
  },

  willDestroy() {
    this._super(...arguments);

    this.map.removeLayer(get(this, '_layerId'));
  }
});
