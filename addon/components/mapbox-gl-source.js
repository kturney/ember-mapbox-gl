import Ember from 'ember';
import layout from '../templates/components/mapbox-gl-source';

const {
  assign,
  Component,
  computed,
  deprecate,
  get,
  getProperties,
  guidFor
} = Ember;

export default Component.extend({
  layout,
  tagName: '',

  map: null,

  /**
    * @deprecated in favor of `options.type`
  */
  dataType: 'geojson',

  /**
    * @deprecated in favor of `options.data`
  */
  data: null,

  /**
   * @param string
   * @description The source options to add, conforming to the Mapbox Source spec.
   * {@link https://www.mapbox.com/mapbox-gl-js/style-spec/#sources Mapbox}
  */
  options: null,

  /**
   * @param object
   * @description The ID of the source to add. Must not conflict with existing sources.
   * {@link https://www.mapbox.com/mapbox-gl-js/api/#map#addsource Mapbox}
  */
  sourceId: computed(function() {
    return guidFor(this);
  }),

  init() {
    this._super(...arguments);

    const { sourceId, dataType, data, options } = getProperties(this, 'sourceId', 'dataType', 'data', 'options');

    deprecate('Use of `dataType` is deprecated in favor of `options.type`', dataType === null || dataType === 'geojson', {
      id: 'ember-mapbox-gl.mapbox-gl-source',
      until: '1.0.0'
    });

    deprecate('Use of `data` is deprecated in favor of `options.data`', data === null, {
      id: 'ember-mapbox-gl.mapbox-gl-source',
      until: '1.0.0'
    });

    const computedOpts = {};
    if (dataType) {
      computedOpts.type = dataType;
    }

    if (data) {
      computedOpts.data = data;
    }

    this.map.addSource(sourceId, assign({}, computedOpts, options));
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const { sourceId, data, options } = getProperties(this, 'sourceId', 'data', 'options');

    const source = this.map.getSource(sourceId);

    // TODO: should we just remove the existing source and replace it?
    const sourceData = (options && options.data) || data;
    if (sourceData) {
      source.setData(sourceData);
    } else if (options && options.coordinates) {
      source.setCoordinates(options.coordinates);
    }
  },

  willDestroy() {
    this._super(...arguments);

    this.map.removeSource(get(this, 'sourceId'));
  }
});
