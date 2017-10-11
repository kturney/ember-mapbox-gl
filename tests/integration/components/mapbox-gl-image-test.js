import { Promise } from 'rsvp';
import { moduleForComponent, test } from 'ember-qunit';
import Config from '../../../config/environment';
import hbs from 'htmlbars-inline-precompile';
import MapboxGl from 'mapbox-gl';
import Sinon from 'sinon';

const createDeferred = () => {
  const defer = {};

  defer.promise = new Promise((resolve, reject) => {
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

    return new Promise((resolve) => {
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

test('it only adds the latest image if image is updated before the previous image finishes loading', async function(assert) {
  const loadImageSpy = this.sandbox.spy(this.map, 'loadImage');
  const addImageSpy = this.sandbox.spy(this.map, 'addImage');

  const defer = createDeferred();

  this.setProperties({
    name: 'logo',
    image: '/assets/creativecommons-128.png',
    options: {},
    onLoad: defer.resolve,
    onError: defer.reject
  });

  this.render(hbs`{{mapbox-gl-image name image options map=map onLoad=onLoad onError=onError}}`);

  assert.ok(loadImageSpy.calledOnce, 'loadImage called');
  assert.equal(loadImageSpy.firstCall.args[0], this.image, 'loads correct image');

  this.set('image', '/assets/mapbox-logo.png')

  assert.ok(loadImageSpy.calledTwice, 'loadImage called');
  assert.equal(loadImageSpy.secondCall.args[0], this.image, 'loads correct image');

  await defer.promise;

  assert.ok(addImageSpy.calledOnce, 'addImage called');
  assert.equal(addImageSpy.firstCall.args[0], this.name, 'adds as correct name');
  assert.equal(addImageSpy.firstCall.args[2], this.options, 'adds with correct options');
});

test('it doesn\'t load the image if the component is destroyed before the image has loaded', async function(assert) {
  const loadImageSpy = this.sandbox.spy(this.map, 'loadImage');
  const addImageSpy = this.sandbox.spy(this.map, 'addImage');

  this.setProperties({
    name: 'logo',
    image: '/assets/creativecommons-128.png'
  });

  this.render(hbs`{{mapbox-gl-image name image map=map}}`);

  assert.ok(loadImageSpy.calledOnce, 'loadImage called');
  assert.equal(loadImageSpy.firstCall.args[0], this.image, 'loads correct image');

  this.clearRender();

  await new Promise((resolve) => setTimeout(resolve, 100));

  assert.notOk(addImageSpy.calledOnce, 'addImage not called');
});

test('it allows the image to be updated', async function(assert) {
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

test('it allows options to not be passed', async function(assert) {
  const loadImageSpy = this.sandbox.spy(this.map, 'loadImage');
  const addImageSpy = this.sandbox.spy(this.map, 'addImage');

  const defer = createDeferred();

  this.setProperties({
    name: 'logo',
    image: '/assets/mapbox-logo.png',
    onLoad: defer.resolve,
    onError: defer.reject
  });

  this.render(hbs`{{mapbox-gl-image name image map=map onLoad=onLoad onError=onError}}`);

  assert.ok(loadImageSpy.calledOnce, 'loadImage called');
  assert.equal(loadImageSpy.firstCall.args[0], this.image, 'loads correct image');

  await defer.promise;

  assert.ok(addImageSpy.calledOnce, 'addImage called');
  assert.equal(addImageSpy.firstCall.args[0], this.name, 'adds as correct name');
});

test('it allows svgs to be added', async function(assert) {
  const addImageSpy = this.sandbox.spy(this.map, 'addImage');

  const defer = createDeferred();

  this.setProperties({
    name: 'marker',
    image: '/assets/marker.svg',
    onLoad: defer.resolve,
    onError: defer.reject
  });

  this.render(hbs`{{mapbox-gl-image name image map=map onLoad=onLoad onError=onError}}`);

  await defer.promise;

  assert.ok(addImageSpy.calledOnce, 'addImage called');
  assert.equal(addImageSpy.firstCall.args[0], this.name, 'adds as correct name');
  assert.ok(addImageSpy.firstCall.args[1] instanceof Image, 'adds image');
});

test('it allows svgs to be added with custom width and height', async function(assert) {
  const addImageSpy = this.sandbox.spy(this.map, 'addImage');

  const defer = createDeferred();

  this.setProperties({
    name: 'marker-custom-width',
    image: '/assets/marker.svg',
    width: 64,
    height: 64,
    onLoad: defer.resolve,
    onError: defer.reject
  });

  this.render(hbs`{{mapbox-gl-image name image width=width height=height map=map onLoad=onLoad onError=onError}}`);

  await defer.promise;

  assert.ok(addImageSpy.calledOnce, 'addImage called');
  assert.equal(addImageSpy.firstCall.args[0], this.name, 'adds as correct name');
  assert.ok(addImageSpy.firstCall.args[1] instanceof Image, 'adds image');
  assert.equal(addImageSpy.firstCall.args[1].width, this.width, 'image has width');
  assert.equal(addImageSpy.firstCall.args[1].height, this.height, 'image has height');
});

test('it sends out an error if provided a bad svg', async function(assert) {
  const defer = createDeferred();

  this.setProperties({
    name: 'bad-marker',
    image: '/assets/bad-marker.svg',
    onLoad: defer.resolve,
    onError: defer.reject
  });

  this.render(hbs`{{mapbox-gl-image name image map=map onLoad=onLoad onError=onError}}`);

  try {
    await defer.promise;
    assert.ok(false, 'should have gotten error');
  } catch (err) {
    assert.equal(err.message, 'failed to load svg');
    assert.ok(err.ev, 'should have original error event attached');
  }
});
