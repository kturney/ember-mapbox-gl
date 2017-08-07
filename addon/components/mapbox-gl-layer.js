import Ember from 'ember';

const {
  assign,
  Component,
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

  init() {
    this._super(...arguments);

    // All of these properties are deprecated, but remain for backwards compatibility
    const {
      sourceId,
      layerType,
      layoutOptions,
      paintOptions
    } = getProperties(this, 'sourceId', 'layerType', 'layoutOptions', 'paintOptions');

    deprecate('Use of `sourceId` is deprecated in favor of `layer.source`', !sourceId, {
      id: 'ember-mapbox-gl.mapbox-gl-layer',
      until: '1.0.0'
    });

    deprecate('Use of `layerType` is deprecated in favor of `layer.type`', !layerType, {
      id: 'ember-mapbox-gl.mapbox-gl-layer',
      until: '1.0.0'
    });

    deprecate('Use of `layoutOptions` is deprecated in favor of `layer.layout`', !layoutOptions, {
      id: 'ember-mapbox-gl.mapbox-gl-layer',
      until: '1.0.0'
    });

    deprecate('Use of `paintOptions` is deprecated in favor of `layer.paint`', !paintOptions, {
      id: 'ember-mapbox-gl.mapbox-gl-layer',
      until: '1.0.0'
    });

    let layer = get(this, 'layer') || {};
    const before = get(this, 'before');

    this.layerId = guidFor(this);

    // Check for config from evironment
    const envConfig = get(
      getOwner(this).resolveRegistration('config:environment'),
      `mapbox-gl.${layer.type ? layer.type : layerType}`) || {};

    // Set properties on layer if deprecated attributes are used instead of `layer` hash
    layer.id = layer.id ? layer.id : this.layerId;
    layer.type = layer.type ? layer.type : layerType ? layerType : 'line';
    layer.source = layer.source ? layer.source : sourceId;
    layer.layout = assign({}, envConfig.layout, layer.layout ? layer.layout : layoutOptions);
    layer.paint = assign({}, envConfig.paint, layer.paint ? layer.paint : paintOptions);

    this.map.addLayer(layer, before);
  },

  willDestroy() {
    this._super(...arguments);

    this.map.removeLayer(this.layerId);
  }
});
