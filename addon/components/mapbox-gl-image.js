import { getProperties, get, computed } from '@ember/object';
import { run } from '@ember/runloop';
import Component from '@ember/component';
import noop from 'ember-mapbox-gl/utils/noop';

/**
  Adds an image for use in the map, see [here](https://www.mapbox.com/mapbox-gl-js/api/#map#addimage).

  ### Properties
  - `name`
    - The unique name for the image. The name will be referenced in a source layer as the `icon-image`. Reference [layers-symbol](https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-symbol) for more details. Property can also be used as the first positional parameter.
  - `image`
    - The path to your image, typically `/assets/<some_image>`. Property can also be used as the second positional parameter.
  - `width`
    - The width of the image in pixels.
  - `height`
    - The height of the image in pixels.

  ### Example
  ```hbs
  {{#mapbox-gl as |map|}}
    {{map.image 'cat' '/assets/cat.png' width=48 height=48}}
    {{!-- `name` and `icon-image` used as positional params above --}}

    {{#map.source options=(hash type='geojson' data=marker) as |source|}}
      {{source.layer layer=(hash
          type='symbol'
          layout=(hash
            icon-image='cat'
            icon-size=0.25))}}
    {{/map.source}}
  {{/mapbox-gl}}
  ```

  ```javascript
  import Controller from '@ember/controller';

  export default Controller.extend({
    marker: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [ -96.7969879, 32.7766642 ] }
        }
      ]
    }
  });
  ```

  @class MapboxGlImageComponent
 */
const MapboxGlImageComponent = Component.extend({
  tagName: '',

  map: null,

  name: null,
  image: null,
  options: null,

  width: null,
  height: null,

  onLoad: noop,
  onError: noop,

  _origName: null,
  _imageSet: false,

  isSvg: computed('name', function() {
    const image = get(this, 'image');
    if (image === null || typeof image !== 'string') {
      return false;
    }

    return /\.svg$/.test(image);
  }),

  didReceiveAttrs() {
    this._super(...arguments);

    if (this._origName !== null) {
      this.map.removeImage(this._origName);
      this._origName = null;
      this._imageSet = false;
    }

    const { image, isSvg, width, height } = getProperties(this, 'image', 'isSvg', 'width', 'height');
    if (image === null) {
      return;
    }

    if (isSvg) {
      const img = new Image();
      if (width !== null) {
        img.width = width;
      }

      if (height !== null) {
        img.height = height;
      }

      img.onload = run.bind(this, this._onImage, image, null, img);
      img.onerror = run.bind(this, this._onSvgErr, image);
      img.src = image;
    } else {
      this.map.loadImage(image, run.bind(this, this._onImage, image));
    }
  },

  willDestroy() {
    this._super(...arguments);

    if (this._imageSet === true) {
      this.map.removeImage(this._origName);
    }
  },

  _onImage(imageName, err, image) {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    if (get(this, 'image') !== imageName) { // image has changed since we started loading
      return;
    }

    if (err) {
      return this.onError(err);
    }

    const { name, options } = getProperties(this, 'name', 'options');

    // map#addImage doesn't like null for options, only undefined or an object
    if (options === null) {
      this.map.addImage(name, image);
    } else {
      this.map.addImage(name, image, options);
    }

    this._origName = name;
    this._imageSet = true;

    this.onLoad();
  },

  _onSvgErr(imageName, ev) {
    const err = new Error('failed to load svg');
    err.ev = ev;
    this._onImage(imageName, err);
  }
});

MapboxGlImageComponent.reopenClass({
  positionalParams: [ 'name', 'image', 'options' ]
});

export default MapboxGlImageComponent;
