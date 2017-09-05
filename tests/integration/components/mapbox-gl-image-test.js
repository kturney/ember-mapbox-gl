import { moduleForComponent, test } from 'ember-qunit';
import Config from '../../../config/environment';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import MapboxGl from 'mapbox-gl';
import Sinon from 'sinon';

const createDeferred = () => {
  const defer = {};

  defer.promise = new Ember.RSVP.Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });

  return defer;
}

moduleForComponent('mapbox-gl-image', 'Integration | Component | mapbox gl image', {
  integration: true,

  before() {
    MapboxGl.accessToken = Config['mapbox-gl'].accessToken;
    this.sandbox = Sinon.sandbox.create();

    return new Ember.RSVP.Promise((resolve) => {
      this.map = new MapboxGl.Map({
        container: document.createElement('div'),
        style: Config['mapbox-gl'].map.style
      });

      this.map.style.once('data', resolve);
    });
  },

  afterEach() {
    this.sandbox.restore();
  },

  after() {
    this.map.remove();
  }
});

test('it ignores null image', function(assert) {
  const loadImageSpy = this.sandbox.spy(this.map, 'loadImage');

  this.render(hbs`{{mapbox-gl-image map=map}}`);

  assert.equal(loadImageSpy.calledOnce, false, 'loadImage not called');
});

test('it adds the image to the map', async function(assert) {
  const loadImageSpy = this.sandbox.spy(this.map, 'loadImage');
  const addImageSpy = this.sandbox.spy(this.map, 'addImage');
  const removeImageSpy = this.sandbox.spy(this.map, 'removeImage');

  const defer = createDeferred();

  this.setProperties({
    name: 'logo',
    image: '/assets/mapbox-logo.png',
    options: {},
    onLoad: defer.resolve,
    onError: defer.reject
  });

  this.render(hbs`{{mapbox-gl-image name image options map=map onLoad=onLoad onError=onError}}`);

  assert.ok(loadImageSpy.calledOnce, 'loadImage called');
  assert.equal(loadImageSpy.firstCall.args[0], this.image, 'loads correct image');

  await defer.promise;

  assert.ok(addImageSpy.calledOnce, 'addImage called');
  assert.equal(addImageSpy.firstCall.args[0], this.name, 'adds as correct name');
  assert.equal(addImageSpy.firstCall.args[2], this.options, 'adds with correct options');

  this.clearRender();

  assert.ok(removeImageSpy.calledOnce, 'removeImage called');
  assert.equal(removeImageSpy.firstCall.args[0], this.name, 'removes correct name');
});

test('it allows the image to be updates', async function(assert) {
  const loadImageSpy = this.sandbox.spy(this.map, 'loadImage');
  const addImageSpy = this.sandbox.spy(this.map, 'addImage');
  const removeImageSpy = this.sandbox.spy(this.map, 'removeImage');

  let defer = createDeferred();

  this.setProperties({
    name: 'logo',
    image: '/assets/mapbox-logo.png',
    options: {},
    onLoad: defer.resolve,
    onError: defer.reject
  });

  this.render(hbs`{{mapbox-gl-image name image options map=map onLoad=onLoad onError=onError}}`);

  assert.ok(loadImageSpy.calledOnce, 'loadImage called');
  assert.equal(loadImageSpy.firstCall.args[0], this.image, 'loads correct image');

  await defer.promise;

  assert.ok(addImageSpy.calledOnce, 'addImage called');
  assert.equal(addImageSpy.firstCall.args[0], this.name, 'adds as correct name');
  assert.equal(addImageSpy.firstCall.args[2], this.options, 'adds with correct options');

  defer = createDeferred();

  this.setProperties({
    name: 'updated-logo',
    onLoad: defer.resolve,
    onError: defer.reject
  });

  assert.ok(removeImageSpy.calledOnce, 'removeImage called');
  assert.equal(removeImageSpy.firstCall.args[0], 'logo', 'removes old name');

  assert.ok(loadImageSpy.calledTwice, 'loadImage called for updated image');
  assert.equal(loadImageSpy.secondCall.args[0], this.image, 'loads correct updated image');

  await defer.promise;

  assert.ok(addImageSpy.calledTwice, 'addImage called for updated image');
  assert.equal(addImageSpy.secondCall.args[0], this.name, 'adds updated as correct name');
  assert.equal(addImageSpy.secondCall.args[2], this.options, 'adds updated with correct options');

  this.clearRender();

  assert.ok(removeImageSpy.calledTwice, 'removeImage called for updated');
  assert.equal(removeImageSpy.secondCall.args[0], this.name, 'removes updated name');
});
