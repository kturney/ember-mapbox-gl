import Ember from 'ember';

const {
  Component,
  get,
  getProperties,
  run
} = Ember;

const MapboxGlImageComponent = Component.extend({
  tagName: '',

  map: null,

  name: null,
  image: null,
  options: null,

  onLoad() {},
  onError() {},

  _origName: null,
  _latestImage: null,
  _imageSet: false,

  init() {
    this._super(...arguments);

    this._onImage = run.bind(this, this._onImage);
  },

  didReceiveAttrs() {
    this._super(...arguments);

    if (this._origName !== null) {
      this.map.removeImage(this._origName);
      this._origName = null;
      this._imageSet = false;
    }

    const image = get(this, 'image');
    if (image === null) {
      return;
    }

    this._latestImage = image;

    this.map.loadImage(image, this._onImage);
  },

  willDestroy() {
    this._super(...arguments);

    if (this._imageSet === true) {
      this.map.removeImage(this._origName);
    }
  },

  _onImage(err, image) {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    if (err) {
      return this.onError(err);
    }

    if (get(this, 'image') !== this._latestImage) { // image has changed since we started loading
      return;
    }

    const { name, options } = getProperties(this, 'name', 'options');

    this.map.addImage(name, image, options);
    this._origName = name;
    this._imageSet = true;

    this.onLoad();
  }
});

MapboxGlImageComponent.reopenClass({
  positionalParams: [ 'name', 'image', 'options' ]
});

export default MapboxGlImageComponent;
