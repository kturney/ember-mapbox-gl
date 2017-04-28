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
  layoutOptions: null,
  paintOptions: null,

  layerType: 'line',
  sourceId: null,

  init() {
    this._super(...arguments);

    this.layerId = guidFor(this);
    const { layerType, sourceId } = getProperties(this, 'layerType', 'sourceId');

    const layerConfig = get(
      getOwner(this).resolveRegistration('config:environment'),
      `mapbox-gl.${layerType}`) || {};

    this.map.addLayer({
      id: this.layerId,
      type: layerType,
      source: sourceId,
      layout: assign({}, layerConfig.layout, get(this, 'layoutOptions')),
      paint: assign({}, layerConfig.paint, get(this, 'paintOptions')),
    });
  },

  willDestroy() {
    this._super(...arguments);

    this.map.removeLayer(this.layerId);
  }
});
