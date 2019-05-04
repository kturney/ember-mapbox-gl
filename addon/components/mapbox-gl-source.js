import { scheduleOnce } from '@ember/runloop';
import { getProperties, get, computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import Component from '@ember/component';
import layout from '../templates/components/mapbox-gl-source';

/**
  Adds a data source to the map. The API matches the mapbox [source docs](https://www.mapbox.com/mapbox-gl-js/api/#sources).

  Example:
  ```hbs
  {{#mapbox-gl as |map|}}
    {{#map.source options=(hash
      type='geojson'
      data=(hash
        type='FeatureCollection'
        features=(array
          (hash
            type='Feature'
            geometry=(hash
              type='Point'
              coordinates=(array -96.7969879 32.7766642)
            )
          )
        )
      ))}}
    {{/map.source}}
  {{/mapbox-gl}}
  ```

  @class MapboxGLSource
*/
export default Component.extend({
  layout,
  tagName: '',

  map: null,

  /**
    @argument options
    @type {Object}
    @description
    An options hash to set as the source.
    - #### `options.type`
      - A string detailing the map source type. Typically `geojson`.

    - #### `options.data`
      - A data hash for the map, following the source.data API detailed by mapbox docs.
  */
  options: null,

  /**
   * @property options
   * @type {Object}
   * @description The ID of the source to add. Must not conflict with existing sources.
   * {@link https://www.mapbox.com/mapbox-gl-js/api/#map#addsource Mapbox}
  */
  sourceId: computed({
    get() {
      return guidFor(this);
    },

    set(k, v) {
      return v;
    }
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
