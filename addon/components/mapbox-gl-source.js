import { assign } from '@ember/polyfills';
import Component from '@ember/component';
import { deprecate } from '@ember/application/deprecations';
import { getProperties, get, computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { bind } from '@ember/runloop';
import layout from '../templates/components/mapbox-gl-source';

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

    const combinedOpts = assign({}, computedOpts, options);

    this.map.addSource(sourceId, combinedOpts);

    if (combinedOpts.data) {
      this._dataDone = bind(this, this._dataDone);
      this.map.getSource(sourceId).on('data', this._dataDone);
    }

    this._dataAvailable = false;
    this._dataInFlight = true;
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const { sourceId, data, options } = getProperties(this, 'sourceId', 'data', 'options');

    const source = this.map.getSource(sourceId);

    const sourceData = (options && options.data) || data;
    if (sourceData) {
      this._dataAvailable = true;
      this._syncData(source, sourceData);
    } else if (options && options.coordinates) {
      source.setCoordinates(options.coordinates);
    }
  },

  _dataDone() {
    this._dataInFlight = false;

    const { sourceId, data, options } = getProperties(this, 'sourceId', 'data', 'options');

    this._syncData(this.map.getSource(sourceId), (options && options.data) || data);
  },

  _syncData(source, data) {
    if (this._dataInFlight === true || this._dataAvailable === false) {
      return;
    }

    source.setData(data);

    this._dataInFlight = true;
    this._dataAvailable = false;
  },

  willDestroy() {
    this._super(...arguments);

    const sourceId = get(this, 'sourceId');

    this.map.getSource(sourceId).off('data', this._dataDone);
    this.map.removeSource(sourceId);
  }
});
