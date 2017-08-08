import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import FakeMap from '../../helpers/fake-map';

moduleForComponent('mapbox-gl-layer', 'Integration | Component | mapbox gl layer', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.set('map', new FakeMap());

  this.render(hbs`{{mapbox-gl-layer map=map}}`);
});

test('it continues to work with the deprecated options', function(assert) {
  assert.expect(9);

  const expectedLayer = {
    source: 'wetbewterrbwrb',
    type: 'circle',
    layout: {
      kyle: 'turney'
    },
    paint: {
      daniel: 'hall'
    }
  };

  this.set('sourceId', expectedLayer.source);
  this.set('layerType', expectedLayer.type);
  this.set('layoutOptions', expectedLayer.layout);
  this.set('paintOptions', expectedLayer.paint);

  this.set('map', {
    addLayer(addedLayer) {
      assert.ok(addedLayer.id, 'layer has an id');

      for (const k in expectedLayer) {
        assert.deepEqual(expectedLayer[k], addedLayer[k], `${k} was passed through correctly`);
      }
    },

    removeLayer() {}
  });

  this.render(hbs`{{mapbox-gl-layer map=map
    sourceId=sourceId
    layerType=layerType
    layoutOptions=layoutOptions
    paintOptions=paintOptions}}`);

  assert.expectDeprecation(/Use of `sourceId` is deprecated in favor of `layer.source`/);
  assert.expectDeprecation(/Use of `layerType` is deprecated in favor of `layer.type`/);
  assert.expectDeprecation(/Use of `layoutOptions` is deprecated in favor of `layer.layout`/);
  assert.expectDeprecation(/Use of `paintOptions` is deprecated in favor of `layer.paint`/);
});

test('it takes a layer object', function(assert) {
  assert.expect(3);

  const layer = {
    id: 'ervewewebewbt',
    type: 'circle',
    source: 'asvaevr',
    layout: {
      kyle: 'turney'
    },
    paint: {
      daniel: 'hall'
    }
  };

  this.set('layer', layer);

  this.set('map', {
    addLayer(addedLayer, addBefore) {
      assert.deepEqual(layer, addedLayer, 'layer is passed through correctly');
      assert.notOk(addBefore, 'no before');
    },

    removeLayer(id) {
      assert.equal(layer.id, id, 'removes correct layer');
    }
  });

  this.render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);
});

test('it passes on the before option', function (assert) {
  assert.expect(3);

  const layer = {
    id: 'ivbiyob',
    type: 'line',
    source: 'evewvr',
    layout: {
      kyle: 'turney'
    },
    paint: {
      daniel: 'hall'
    }
  };

  const before = 'ewvewtbewb';

  this.set('layer', layer);
  this.set('before', before);

  this.set('map', {
    addLayer(addedLayer, addBefore) {
      assert.deepEqual(layer, addedLayer, 'layer is passed through correctly');
      assert.equal(before, addBefore, 'passes on correct before');
    },

    removeLayer(id) {
      assert.equal(layer.id, id, 'removes correct layer');
    }
  });

  this.render(hbs`{{mapbox-gl-layer map=map layer=layer before=before}}`);
});

test('it generates a layer.id if needed', function(assert) {
  assert.expect(3);

  const layer = {
    type: 'circle',
    source: 'sveavewvew',
    layout: {
      kyle: 'turney'
    },
    paint: {
      daniel: 'hall'
    }
  };

  this.set('layer', layer);
  let defaultLayerId = null;

  this.set('map', {
    addLayer(addedLayer) {
      assert.ok(addedLayer.id, 'layer has a generated id');
      defaultLayerId = addedLayer.id;
    },

    removeLayer(id) {
      assert.ok(defaultLayerId, 'defaultLayerId was set');
      assert.equal(defaultLayerId, id, 'removes correct layer');
    }
  });

  this.render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);
});

test('it defaults layer.type to "line"', function(assert) {
  assert.expect(1);

  this.set('map', {
    addLayer(addedLayer) {
      assert.equal(addedLayer.type, 'line', 'default layer.type is line');
    },

    removeLayer() {}
  });

  this.render(hbs`{{mapbox-gl-layer map=map}}`);
});

test('it defaults layer.type to "line" if layer is provided', function (assert) {
  assert.expect(2);

  const layer = {
    id: 'wevevwv'
  };

  this.set('layer', layer);

  this.set('map', {
    addLayer(addedLayer) {
      assert.equal(addedLayer.id, layer.id, 'layer id is passed through');
      assert.equal(addedLayer.type, 'line', 'default layer.type is line');
    },

    removeLayer() { }
  });

  this.render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);
});
