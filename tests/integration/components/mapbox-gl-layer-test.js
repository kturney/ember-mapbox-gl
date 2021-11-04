import { assign } from '@ember/polyfills';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { clearRender, render } from '@ember/test-helpers';
import setupMap from '../../helpers/create-map';
import { hbs } from 'ember-cli-htmlbars';
import Sinon from 'sinon';

module('Integration | Component | mapbox gl layer', function (hooks) {
  setupRenderingTest(hooks);
  setupMap(hooks);

  hooks.before(function () {
    this.sandbox = Sinon.createSandbox();
  });

  hooks.afterEach(function () {
    this.sandbox.restore();
  });

  test('it takes a layer object', async function (assert) {
    this.set('layer', {
      id: 'ervewewebewbt',
      type: 'circle',
      source: 'asvaevr',
      layout: {
        visibility: 'visible',
      },
      paint: {
        'circle-color': '#00ffff',
      },
    });

    this.map.addSource(this.layer.source, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-76.53063297271729, 39.18174077994108],
        },
      },
    });

    try {
      const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

      await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

      assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
      assert.deepEqual(
        addLayerSpy.firstCall.args[0],
        this.layer,
        'layer is passed through correctly'
      );

      await clearRender();
    } finally {
      this.map.removeSource(this.layer.source);
    }
  });

  test('it passes on the before option', async function (assert) {
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
              coordinates: [-76.53063297271729, 39.18174077994108],
            },
          },
        },
      },
    });

    this.map.addLayer({
      id: this.before,
      type: 'line',
      source: this.layer.source,
    });

    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

    await render(hbs`{{mapbox-gl-layer map=map layer=layer before=before}}`);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    assert.equal(
      addLayerSpy.firstCall.args[1],
      this.before,
      'passes on correct before'
    );

    this.map.removeLayer(this.before);
  });

  test('it generates a layer.id if needed', async function (assert) {
    this.set('layer', {
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
      },
    });

    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');
    const removeLayerSpy = this.sandbox.spy(this.map, 'removeLayer');

    await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    assert.ok(addLayerSpy.firstCall.args[0].id, 'layer has a generated id');

    await clearRender();

    assert.ok(removeLayerSpy.calledOnce, 'removeLayer called once');
    assert.equal(
      removeLayerSpy.firstCall.args[0],
      addLayerSpy.firstCall.args[0].id,
      'removes correct layer'
    );
  });

  test('it defaults layer.type to "line"', async function (assert) {
    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

    this.set('source', {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-76.53063297271729, 39.18174077994108],
        },
      },
    });

    await render(hbs`{{mapbox-gl-layer map=map layer=(hash source=source)}}`);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    assert.equal(
      addLayerSpy.firstCall.args[0].type,
      'line',
      'default layer.type is line'
    );
  });

  test('it defaults layer.type to "line" if layer is provided', async function (assert) {
    this.set('layer', {
      id: 'wevevwv',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
      },
    });

    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

    await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    assert.equal(
      addLayerSpy.firstCall.args[0].id,
      this.layer.id,
      'layer id is passed through'
    );
    assert.equal(
      addLayerSpy.firstCall.args[0].type,
      'line',
      'default layer.type is line'
    );
  });

  test('it updates layer layout properties', async function (assert) {
    this.set('layer', {
      id: 'uhhvvuvgvvhjln vgu',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
      },
      layout: {
        visibility: 'none',
      },
    });

    await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.equal(
      this.map.getLayoutProperty(this.layer.id, 'visibility'),
      'none',
      'layout property was set'
    );

    this.set(
      'layer',
      assign({}, this.layer, { layout: { visibility: 'visible' } })
    );

    assert.equal(
      this.map.getLayoutProperty(this.layer.id, 'visibility'),
      'visible',
      'layout property was updated'
    );
  });

  test('it updates layer paint properties', async function (assert) {
    this.set('layer', {
      id: 'u3qfgoljknjklm',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
      },
      paint: {
        'circle-color': 'white',
      },
    });

    await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.equal(
      this.map.getPaintProperty(this.layer.id, 'circle-color'),
      'white',
      'paint property was set'
    );

    this.set(
      'layer',
      assign({}, this.layer, { paint: { 'circle-color': 'black' } })
    );

    assert.equal(
      this.map.getPaintProperty(this.layer.id, 'circle-color'),
      'black',
      'paint property was updated'
    );
  });

  test('it passes layer.filter on', async function (assert) {
    this.set('layer', {
      id: 'vbttbbb',
      type: 'circle',
      filter: ['==', '$type', 'Point'],
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
      },
    });

    await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.deepEqual(
      this.map.getFilter(this.layer.id),
      this.layer.filter,
      'filter was set'
    );
  });

  test('it updates filter', async function (assert) {
    this.set('layer', {
      id: 'rveilqbyveqpivhbeq',
      type: 'circle',
      filter: ['==', '$type', 'Point'],
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
      },
    });

    await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.deepEqual(
      this.map.getFilter(this.layer.id),
      this.layer.filter,
      'filter was set'
    );

    this.set(
      'layer',
      assign({}, this.layer, { filter: ['!=', '$type', 'LineString'] })
    );

    assert.deepEqual(
      this.map.getFilter(this.layer.id),
      this.layer.filter,
      'filter was updated'
    );

    this.set('layer', assign({}, this.layer, { filter: null }));

    assert.equal(this.map.getFilter(this.layer.id), null, 'filter was cleared');
  });

  test('it passes through other layer options', async function (assert) {
    this.set('layer', {
      id: 'rwbwrnytwnnm',
      type: 'circle',
      metadata: { kyle: 'turney' },
      'source-layer': 'contour',
      source: {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2',
      },
    });

    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

    await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    assert.deepEqual(
      addLayerSpy.firstCall.args[0].metadata,
      this.layer.metadata,
      'metadata passed through'
    );
    assert.equal(
      addLayerSpy.firstCall.args[0]['source-layer'],
      this.layer['source-layer'],
      'source-layer passed through'
    );
  });

  test('it updates minzoom and maxzoom on the layer', async function (assert) {
    this.set('layer', {
      id: 'biyrivbibvpobv',
      type: 'circle',
      minzoom: 5,
      maxzoom: 10,
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
      },
    });

    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');
    const setLayerZoomRangeSpy = this.sandbox.spy(
      this.map,
      'setLayerZoomRange'
    );

    await render(hbs`{{mapbox-gl-layer map=map layer=layer}}`);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    assert.equal(
      addLayerSpy.firstCall.args[0].minzoom,
      5,
      'minzoom passed through'
    );
    assert.equal(
      addLayerSpy.firstCall.args[0].maxzoom,
      10,
      'maxzoom passed through'
    );
    assert.notOk(
      setLayerZoomRangeSpy.calledOnce,
      'setLayerZoomRange not called'
    );

    this.set('layer', assign({}, this.layer, { minzoom: 2, maxzoom: 15 }));

    assert.ok(addLayerSpy.calledOnce, 'addLayer only called once');
    assert.ok(setLayerZoomRangeSpy.calledOnce, 'setLayerZoomRange calledOnce');
    assert.equal(
      setLayerZoomRangeSpy.firstCall.args[0],
      this.layer.id,
      'setLayerZoomRange called with correct layerId'
    );
    assert.equal(
      setLayerZoomRangeSpy.firstCall.args[1],
      2,
      'setLayerZoomRange called with correct minzoom'
    );
    assert.equal(
      setLayerZoomRangeSpy.firstCall.args[2],
      15,
      'setLayerZoomRange called with correct maxzoom'
    );
  });

  test('it yields the layerId', async function (assert) {
    this.set('layer', {
      id: 'test-layer-id',
      type: 'circle',
      source: 'asvaevr',
      layout: {
        visibility: 'visible',
      },
      paint: {
        'circle-color': '#00ffff',
      },
    });

    this.map.addSource(this.layer.source, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-76.53063297271729, 39.18174077994108],
        },
      },
    });

    await render(hbs`
      {{#mapbox-gl-layer map=map layer=layer map=map as |layer|}}
        <div id="layer">
          {{layer.id}}
        </div>
      {{/mapbox-gl-layer}}
    `);

    assert.dom('#layer').hasText('test-layer-id');
  });
});
