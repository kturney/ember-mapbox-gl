import Ember from 'ember';
import layout from '../templates/components/mapbox-gl-source';

const {
  Component,
  computed,
  get,
  getProperties,
  guidFor
} = Ember;

export default Component.extend({
  layout,
  tagName: '',

  map: null,
  dataType: 'geojson',
  data: null,

  options: null,

  sourceId: computed({
    get() {
      return guidFor(this);
    },

    set(key, val) {
      return val;
    }
  }),

  init() {
    this._super(...arguments);

    const { sourceId, dataType, data } = getProperties(this, 'sourceId', 'dataType', 'data');
    let options = get(this, 'options') || {};

    if (!options.type) {
      options.type = dataType;
    }

    if (data) {
      options.data = data;
    }

    this.map.addSource(sourceId, options);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const { sourceId, data } = getProperties(this, 'sourceId', 'data');

    this.map.getSource(sourceId).setData(data);
  },

  willDestroy() {
    this._super(...arguments);

    this.map.removeSource(get(this, 'sourceId'));
  }
});
