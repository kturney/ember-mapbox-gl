import { scheduleOnce } from '@ember/runloop';
import { getProperties, get, computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@ember/component';
import layout from '../templates/components/mapbox-gl-source';

/**
 * A utility that brokers HTTP requests...
 *
 * @class MapboxGlSource
 */
export default Component.extend({
  layout,
  tagName: '',

  map: null,

  /**
   * @property map
   * @type {String}
   * @description The source options to add, conforming to the Mapbox Source spec.
   * {@link https://www.mapbox.com/mapbox-gl-js/style-spec/#sources Mapbox}
  */
  options: null,

  /**
   * @property options
   * @type {Object}
   * @description The ID of the source to add. Must not conflict with existing sources.
   * {@link https://www.mapbox.com/mapbox-gl-js/api/#map#addsource Mapbox}
  */
  sourceId: computed(function() {
    return guidFor(this);
  }),

  init() {
    this._super(...arguments);

    const { sourceId, options } = getProperties(this, 'sourceId', 'options');

    this.map.addSource(sourceId, options);
  },

  didUpdateAttrs() {
    this._super(...arguments);

    const { sourceId, options } = getProperties(this, 'sourceId', 'options');

    if (options) {
      if (options.data) {
        this.map.getSource(sourceId).setData(options.data);
      } else if (options.coordinates) {
        this.map.getSource(sourceId).setCoordinates(options.coordinates);
      }
    }
  },

  willDestroy() {
    this._super(...arguments);

    const sourceId = get(this, 'sourceId');

    // wait for any layers to be removed before removing the source
    scheduleOnce('afterRender', this.map, this.map.removeSource, sourceId);
  }
});
