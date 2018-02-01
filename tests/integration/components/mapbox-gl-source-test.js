import { assign } from '@ember/polyfills';
import { moduleForComponent, test } from 'ember-qunit';
import createMap from '../../helpers/create-map';
import hbs from 'htmlbars-inline-precompile';
import Sinon from 'sinon';
import wait from 'ember-test-helpers/wait';

moduleForComponent('mapbox-gl-source', 'Integration | Component | mapbox gl source', {
  integration: true,

  async before() {
    this.sandbox = Sinon.sandbox.create();

    this.map = await createMap();
  },

  afterEach() {
    this.sandbox.restore();
  },

  after() {
    this.map.remove();
  }
});

test('it accepts a sourceId, dataType, and data', async function(assert) {
  const sourceOptions = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
                -76.53063297271729,
                39.18174077994108
            ]
          }
      }]
    }
  };

  const addSourceSpy = this.sandbox.spy(this.map, 'addSource');
  const removeSourceSpy = this.sandbox.spy(this.map, 'removeSource');

  this.setProperties({
    sourceId: 'evewvrwvwrvw',
    data: sourceOptions.data,
    dataType: sourceOptions.type
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId data=data dataType=dataType}}`);

  assert.ok(addSourceSpy.calledOnce, 'addSource called once');
  assert.equal(addSourceSpy.firstCall.args[0], this.sourceId, 'correct sourceId is added');
  assert.deepEqual(addSourceSpy.firstCall.args[1], sourceOptions, 'correct source options');

  this.clearRender();

  await wait();

  assert.ok(removeSourceSpy.calledOnce, 'removeSource called once');
  assert.equal(removeSourceSpy.firstCall.args[0], this.sourceId, 'correct sourceId is removed');
});

test('it creates a sourceId if one is not provided', async function(assert) {
  this.setProperties({
    data: {
      type: 'FeatureCollection',
      features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              -76.53063297271729,
              39.18174077994108
            ]
          }
      }]
    }
  });

  const addSourceSpy = this.sandbox.spy(this.map, 'addSource');
  const removeSourceSpy = this.sandbox.spy(this.map, 'removeSource');

  this.render(hbs`{{mapbox-gl-source map=map options=(hash type='geojson' data=data)}}`);

  assert.ok(addSourceSpy.calledOnce, 'addSource called once');
  assert.ok(addSourceSpy.firstCall.args[0], 'a sourceId is added');

  this.clearRender();

  await wait();

  assert.ok(removeSourceSpy.calledOnce, 'removeSource called once');
  assert.equal(removeSourceSpy.firstCall.args[0], addSourceSpy.firstCall.args[0], 'correct sourceId is removed');
});

test('it accepts source options as an options object', async function(assert) {
  const sourceOptions = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [{
          type: 'Feature',
          properties: {},
          geometry: {
              type: 'Point',
              coordinates: [
                  -76.53063297271729,
                  39.18174077994108
              ]
          }
      }]
    }
  };

  const addSourceSpy = this.sandbox.spy(this.map, 'addSource');
  const removeSourceSpy = this.sandbox.spy(this.map, 'removeSource');

  this.setProperties({
    sourceId: 'evewvrwvwrvw',
    options: sourceOptions
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId options=options}}`);

  assert.ok(addSourceSpy.calledOnce, 'addSource called once');
  assert.equal(addSourceSpy.firstCall.args[0], this.sourceId, 'correct sourceId is added');
  assert.deepEqual(addSourceSpy.firstCall.args[1], sourceOptions, 'correct source options');

  this.clearRender();

  await wait();

  assert.ok(removeSourceSpy.calledOnce, 'removeSource called once');
  assert.equal(removeSourceSpy.firstCall.args[0], this.sourceId, 'correct sourceId is removed');
});

test('it passes updated data on to the source via the data property', async function(assert) {
  const sourceOptions = {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              -76.53063297271729,
              39.18174077994108
            ]
          }
      }]
    }
  };

  const updatedData = {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [
        -76.53063297271729,
        39.18174077994108
      ]
    }
  };

  const addSourceSpy = this.sandbox.spy(this.map, 'addSource');

  this.setProperties({
    sourceId: 'evewvrwvwrvw',
    data: sourceOptions.data,
    dataType: sourceOptions.type
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId data=data dataType=dataType}}`);

  assert.ok(addSourceSpy.calledOnce, 'addSource called once');
  assert.equal(addSourceSpy.firstCall.args[0], this.sourceId, 'correct sourceId is added');
  assert.deepEqual(addSourceSpy.firstCall.args[1], sourceOptions, 'correct source options');

  const source = this.map.getSource(this.sourceId);
  const setDataSpy = this.sandbox.spy(source, 'setData');

  this.set('data', updatedData);

  assert.ok(setDataSpy.calledOnce, 'source#setData called once');
  assert.deepEqual(setDataSpy.firstCall.args[0], updatedData, 'correct data is updated');
});

test('it passes updated data on to the source via the options property', async function(assert) {
  const origData = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            -76.53063297271729,
            39.18174077994108
          ]
        }
    }]
  };

  const updatedData = {
    type: 'FeatureCollection',
    features: [
      { type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            -76.53063297271729,
            39.18174077994108
          ]
        }
      },
      { type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            -76.53063297271728,
            39.18174077994107
          ]
        }
      }
    ]
  };

  const addSourceSpy = this.sandbox.spy(this.map, 'addSource');

  this.setProperties({
    sourceId: 'evewvrwvwrvw',
    data: origData
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId options=(hash type='geojson' data=data)}}`);

  assert.ok(addSourceSpy.calledOnce, 'addSource called once');
  assert.equal(addSourceSpy.firstCall.args[0], this.sourceId, 'correct sourceId is added');
  assert.deepEqual(addSourceSpy.firstCall.args[1], { type: 'geojson', data: origData }, 'correct source options');

  const source = this.map.getSource(this.sourceId);
  const setDataSpy = this.sandbox.spy(source, 'setData');

  this.set('data', updatedData);

  assert.ok(setDataSpy.calledOnce, 'source#setData called once');
  assert.deepEqual(setDataSpy.firstCall.args[0], updatedData, 'correct data is updated');
});

test('it passes updated coordinates on to the source via the options property', async function(assert) {
  const updatedCoordinates = [
    [-76.54335737228394, 39.18579907229748],
    [-76.52803659439087, 39.1838364847587],
    [-76.5295386314392, 39.17683392507606],
    [-76.54520273208618, 39.17876344106642]
  ];

  this.setProperties({
    sourceId: 'evewvrwvwrvw',
    options: {
      type: 'video',
      urls: [],
      coordinates: [
        [-76.54, 39.18],
        [-76.52, 39.18],
        [-76.52, 39.17],
        [-76.54, 39.17]
      ]
    }
  });

  const addSourceSpy = this.sandbox.spy(this.map, 'addSource');

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId options=options}}`);

  assert.ok(addSourceSpy.calledOnce, 'addSource called once');
  assert.equal(addSourceSpy.firstCall.args[0], this.sourceId, 'correct sourceId is added');
  assert.deepEqual(addSourceSpy.firstCall.args[1], this.options, 'correct source options');

  const setCoordinatesSpy = this.sandbox.spy(this.map.getSource(this.sourceId), 'setCoordinates');

  this.set('options', assign({}, this.options, { coordinates: updatedCoordinates }));

  assert.ok(setCoordinatesSpy.calledOnce, 'source#setCoordinates called once');
  assert.deepEqual(setCoordinatesSpy.firstCall.args[0], updatedCoordinates, 'correct coordinates is updated');
});

test('it passes on its sourceId to its layers', async function (assert) {
  this.setProperties({
    sourceId: 'evewvrwvwrvw',
    data: {
      type: 'FeatureCollection',
      features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              -76.53063297271729,
              39.18174077994108
            ]
          }
      }]
    }
  });

  const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

  this.sourceId = 'guvvguvguugvu';

  this.render(hbs`
    {{#mapbox-gl-source map=map sourceId=sourceId options=(hash type='geojson' data=data) as |source|}}
      {{source.layer layer=(hash type='symbol' layout=(hash icon-image='rocket-15'))}}
    {{/mapbox-gl-source}}
  `);

  assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
  assert.equal(addLayerSpy.firstCall.args[0].source, this.sourceId, 'correct sourceId is used');

  assert.expectNoDeprecation();
});
