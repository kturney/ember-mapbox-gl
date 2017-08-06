import Ember from 'ember';

const {
  assign,
  Component,
  get,
  getOwner,
  getProperties,
  guidFor
} = Ember;

export default Component.extend({
  tagName: '',

  map: null,
  coordinates: null,

  options: null,

  /**
  * @deprecated in favor of `options` hash
  */
  layerType: 'line',

  /**
  * @deprecated in favor of `options` hash
  */
  layoutOptions: null,

  /**
  * @deprecated in favor of `options` hash
  */
  paintOptions: null,

  sourceId: null,

  init() {
    this._super(...arguments);

    this.layerId = guidFor(this);

    let options = get(this, 'options') || {};

    const {
      sourceId,
      layerType,
      layoutOptions,
      paintOptions
    } = getProperties(this, 'sourceId', 'layerType', 'layoutOptions', 'paintOptions');

    const layerConfig = get(
      getOwner(this).resolveRegistration('config:environment'),
      `mapbox-gl.${options.type ? options.type : layerType}`) || {};

    options = {
      id: options.id ? options.id : this.layerId,
      type: options.type ? options.type : layerType,
      source: options.source ? options.source : sourceId,
      layout: assign({}, layerConfig.layout, options.layout ? options.layout : layoutOptions),
      paint: assign({}, layerConfig.paint, options.paint ? options.paint : paintOptions),
    }

    this.map.addLayer(options);
  },

  willDestroy() {
    this._super(...arguments);

    this.map.removeLayer(this.layerId);
  }
});
