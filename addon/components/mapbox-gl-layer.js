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
  id: Ember.computed(function() {
    return guidFor(this);
  }),

  map: null,
  coordinates: null,
  layoutOptions: null,
  paintOptions: null,

  layerType: 'line',
  sourceId: null,
  before: null,

  init() {
    this._super(...arguments);
    const { layerType, sourceId, id } = getProperties(this, 'layerType', 'sourceId', 'id');

    const layerConfig = get(
      getOwner(this).resolveRegistration('config:environment'),
      `mapbox-gl.${layerType}`) || {};

    const options = {
      id: id,
      type: layerType,
      source: sourceId,
      layout: assign({}, layerConfig.layout, get(this, 'layoutOptions')),
      paint: assign({}, layerConfig.paint, get(this, 'paintOptions')),
      minZoom: 8,
    };
    
    const before = this.get('before');

    this.map.addLayer(options, before);
  },

  willDestroy() {
    this._super(...arguments);

    this.map.removeLayer(this.id);
  }
});
