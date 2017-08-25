import { moduleForComponent, test } from 'ember-qunit';
import Config from '../../../config/environment';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import MapboxGl from 'mapbox-gl';
import Sinon from 'sinon';

moduleForComponent('mapbox-gl-layer', 'Integration | Component | mapbox gl layer', {
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

test('it continues to work with the deprecated options', async function(assert) {
  const expectedLayer = {
    source: 'rtbt4q4bh4rh6',
    type: 'circle',
    layout: {
      visibility: 'visible'
    },
    paint: {
      'circle-color': '#00ffff'
    }
  };

  this.map.addSource(expectedLayer.source, {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [ -77.0323, 38.9131 ]
      },
    }
  });

  try {
    this.set('sourceId', expectedLayer.source);
    this.set('layerType', expectedLayer.type);
    this.set('layoutOptions', expectedLayer.layout);
    this.set('paintOptions', expectedLayer.paint);

    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

    this.render(hbs`{{mapbox-gl-layer map=map
      sourceId=sourceId
      layerType=layerType
      layoutOptions=layoutOptions
      paintOptions=paintOptions}}`);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    const addedLayer = addLayerSpy.firstCall.args[0];
    for (const k in expectedLayer) {
      assert.deepEqual(addedLayer[k], expectedLayer[k], `${k} was passed through correctly`);
    }

    assert.expectDeprecation(/Use of `sourceId` is deprecated in favor of `layer.source`/);
    assert.expectDeprecation(/Use of `layerType` is deprecated in favor of `layer.type`/);
    assert.expectDeprecation(/Use of `layoutOptions` is deprecated in favor of `layer.layout`/);
    assert.expectDeprecation(/Use of `paintOptions` is deprecated in favor of `layer.paint`/);

    this.clearRender();
  } finally {
    this.map.removeSource(expectedLayer.source);
  }
});

test('it takes a layer object', async function(assert) {
  this.set('layer', {
    id: 'ervewewebewbt',
    type: 'circle',
    source: 'asvaevr',
    layout: {
      visibility: 'visible'
    },
    paint: {
      'circle-color': '#00ffff'
    }
  });

  this.map.addSource(this.layer.source, {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -76.53063297271729,
          39.18174077994108
        ]
      }
    }
  });

  try {
    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

    this.render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    assert.deepEqual(addLayerSpy.firstCall.args[0], this.layer, 'layer is passed through correctly');

    this.clearRender();
  } finally {
    this.map.removeSource(this.layer.source);
  }
});

test('it passes on the before option', function (assert) {
  this.setProperties({
    before: 'ewvewtbewb',
    layer: {
      id: 'ivbiyob',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              -76.53063297271729,
              39.18174077994108
            ]
          }
        }
      },
    }
  });

  const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

  this.render(hbs`{{mapbox-gl-layer map=map layer=layer before=before}}`);

  assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
  assert.equal(addLayerSpy.firstCall.args[1], this.before, 'passes on correct before');
});

test('it generates a layer.id if needed', async function(assert) {
  this.set('layer', {
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            -76.53063297271729,
            39.18174077994108
          ]
        }
      }
    }
  });

  const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');
  const removeLayerSpy = this.sandbox.spy(this.map, 'removeLayer');

  this.render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

  assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
  assert.ok(addLayerSpy.firstCall.args[0].id, 'layer has a generated id');

  this.clearRender();

  assert.ok(removeLayerSpy.calledOnce, 'removeLayer called once');
  assert.equal(removeLayerSpy.firstCall.args[0], addLayerSpy.firstCall.args[0].id, 'removes correct layer');
});

test('it defaults layer.type to "line"', function(assert) {
  const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

  this.set('source', {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -76.53063297271729,
          39.18174077994108
        ]
      }
    }
  });

  this.render(hbs`{{mapbox-gl-layer map=map layer=(hash source=source)}}`);

  assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
  assert.equal(addLayerSpy.firstCall.args[0].type, 'line', 'default layer.type is line');
});

test('it defaults layer.type to "line" if layer is provided', function (assert) {
  this.set('layer', {
    id: 'wevevwv',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            -76.53063297271729,
            39.18174077994108
          ]
        }
      }
    }
  });

  const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

  this.render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

  assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
  assert.equal(addLayerSpy.firstCall.args[0].id, this.layer.id, 'layer id is passed through');
  assert.equal(addLayerSpy.firstCall.args[0].type, 'line', 'default layer.type is line');
});
