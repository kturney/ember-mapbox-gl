import { assign } from '@ember/polyfills';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { clearRender, render, settled, waitFor } from '@ember/test-helpers';
import setupMap from '../../helpers/create-map';
import { hbs } from 'ember-cli-htmlbars';
import Sinon from 'sinon';

module('Integration | Component | mapbox gl source', function (hooks) {
  setupRenderingTest(hooks);
  setupMap(hooks);

  hooks.before(function () {
    this.sandbox = Sinon.createSandbox();
  });

  hooks.afterEach(function () {
    this.sandbox.restore();
  });

  test('it creates a sourceId if one is not provided', async function (assert) {
    this.setProperties({
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-76.53063297271729, 39.18174077994108],
            },
          },
        ],
      },
    });

    const addSourceSpy = this.sandbox.spy(this.map, 'addSource');
    const removeSourceSpy = this.sandbox.spy(this.map, 'removeSource');

    await render(
      hbs`{{mapbox-gl-source map=map options=(hash type='geojson' data=data)}}`
    );

    assert.ok(addSourceSpy.calledOnce, 'addSource called once');
    assert.ok(addSourceSpy.firstCall.args[0], 'a sourceId is added');

    await clearRender();

    await settled();

    assert.ok(removeSourceSpy.calledOnce, 'removeSource called once');
    assert.equal(
      removeSourceSpy.firstCall.args[0],
      addSourceSpy.firstCall.args[0],
      'correct sourceId is removed'
    );
  });

  test('it accepts source options as an options object', async function (assert) {
    const sourceOptions = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [-76.53063297271729, 39.18174077994108],
            },
          },
        ],
      },
    };

    const addSourceSpy = this.sandbox.spy(this.map, 'addSource');
    const removeSourceSpy = this.sandbox.spy(this.map, 'removeSource');

    this.setProperties({
      sourceId: 'evewvrwvwrvw',
      options: sourceOptions,
    });

    await render(
      hbs`{{mapbox-gl-source map=map sourceId=sourceId options=options}}`
    );

    assert.ok(addSourceSpy.calledOnce, 'addSource called once');
    assert.equal(
      addSourceSpy.firstCall.args[0],
      this.sourceId,
      'correct sourceId is added'
    );
    assert.deepEqual(
      addSourceSpy.firstCall.args[1],
      sourceOptions,
      'correct source options'
    );

    await clearRender();

    await settled();

    assert.ok(removeSourceSpy.calledOnce, 'removeSource called once');
    assert.equal(
      removeSourceSpy.firstCall.args[0],
      this.sourceId,
      'correct sourceId is removed'
    );
  });

  test('it passes updated data on to the source via the options property', async function (assert) {
    const origData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
      ],
    };

    const updatedData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271729, 39.18174077994108],
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-76.53063297271728, 39.18174077994107],
          },
        },
      ],
    };

    const addSourceSpy = this.sandbox.spy(this.map, 'addSource');

    this.setProperties({
      sourceId: 'evewvrwvwrvw',
      data: origData,
    });

    await render(
      hbs`{{mapbox-gl-source map=map sourceId=sourceId options=(hash type='geojson' data=data)}}`
    );

    assert.ok(addSourceSpy.calledOnce, 'addSource called once');
    assert.equal(
      addSourceSpy.firstCall.args[0],
      this.sourceId,
      'correct sourceId is added'
    );
    assert.deepEqual(
      Object.assign({}, addSourceSpy.firstCall.args[1]), // clone so comparison against ember empty object matches
      { type: 'geojson', data: origData },
      'correct source options'
    );

    const source = this.map.getSource(this.sourceId);
    const setDataSpy = this.sandbox.spy(source, 'setData');

    this.set('data', updatedData);

    assert.ok(setDataSpy.calledOnce, 'source#setData called once');
    assert.deepEqual(
      setDataSpy.firstCall.args[0],
      updatedData,
      'correct data is updated'
    );
  });

  test('it passes updated coordinates on to the source via the options property', async function (assert) {
    const updatedCoordinates = [
      [-76.54335737228394, 39.18579907229748],
      [-76.52803659439087, 39.1838364847587],
      [-76.5295386314392, 39.17683392507606],
      [-76.54520273208618, 39.17876344106642],
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
          [-76.54, 39.17],
        ],
      },
    });

    const addSourceSpy = this.sandbox.spy(this.map, 'addSource');

    await render(
      hbs`{{mapbox-gl-source map=map sourceId=sourceId options=options}}`
    );

    assert.ok(addSourceSpy.calledOnce, 'addSource called once');
    assert.equal(
      addSourceSpy.firstCall.args[0],
      this.sourceId,
      'correct sourceId is added'
    );
    assert.deepEqual(
      addSourceSpy.firstCall.args[1],
      this.options,
      'correct source options'
    );

    const setCoordinatesSpy = this.sandbox.spy(
      this.map.getSource(this.sourceId),
      'setCoordinates'
    );

    this.set(
      'options',
      assign({}, this.options, { coordinates: updatedCoordinates })
    );

    assert.ok(
      setCoordinatesSpy.calledOnce,
      'source#setCoordinates called once'
    );
    assert.deepEqual(
      setCoordinatesSpy.firstCall.args[0],
      updatedCoordinates,
      'correct coordinates is updated'
    );
  });

  test('it passes on its sourceId to its layers', async function (assert) {
    this.setProperties({
      sourceId: 'evewvrwvwrvw',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-76.53063297271729, 39.18174077994108],
            },
          },
        ],
      },
    });

    const addLayerSpy = this.sandbox.spy(this.map, 'addLayer');

    this.sourceId = 'guvvguvguugvu';

    await render(hbs`
      {{#mapbox-gl-source map=map sourceId=sourceId options=(hash type='geojson' data=data) as |source|}}
        {{source.layer layer=(hash type='symbol' layout=(hash icon-image='rocket-15'))}}
      {{/mapbox-gl-source}}
    `);

    assert.ok(addLayerSpy.calledOnce, 'addLayer called once');
    assert.equal(
      addLayerSpy.firstCall.args[0].source,
      this.sourceId,
      'correct sourceId is used'
    );

    assert.expectNoDeprecation();
  });

  test('it cleans up sources before its containing map is removed when the map goes away', async function (assert) {
    // a TypeError would be thrown during this test if it doesn't work
    const sourceOptions = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [-76.53063297271729, 39.18174077994108],
            },
          },
        ],
      },
    };

    let addSourceSpy = null;
    let removeSourceSpy = null;

    this.setProperties({
      sourceId: 'evewvrwvwrvw',
      options: sourceOptions,
    });

    this.mapLoaded = (map) => {
      addSourceSpy = this.sandbox.spy(map, 'addSource');
      removeSourceSpy = this.sandbox.spy(map, 'removeSource');
    };

    await render(hbs`
      {{#mapbox-gl mapLoaded=mapLoaded as |map|}}
        {{map.source sourceId=sourceId options=options}}
        <div id='loaded-sigil'></div>
      {{/mapbox-gl}}
    `);

    await waitFor('#loaded-sigil');

    assert.ok(addSourceSpy.calledOnce, 'addSource called once');
    assert.equal(
      addSourceSpy.firstCall.args[0],
      this.sourceId,
      'correct sourceId is added'
    );
    assert.deepEqual(
      addSourceSpy.firstCall.args[1],
      sourceOptions,
      'correct source options'
    );

    await clearRender();

    await settled();

    assert.ok(removeSourceSpy.calledOnce, 'removeSource called once');
    assert.equal(
      removeSourceSpy.firstCall.args[0],
      this.sourceId,
      'correct sourceId is removed'
    );
  });

  test('it yields the sourceId', async function (assert) {
    this.setProperties({
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-76.53063297271729, 39.18174077994108],
            },
          },
        ],
      },
    });

    await render(
      hbs`
        {{#mapbox-gl-source sourceId='test-source-id' map=map options=(hash type='geojson' data=data) as |source|}}
          <div id="source">
            {{source.id}}
          </div>
        {{/mapbox-gl-source}}
      `
    );

    assert.dom('#source').hasText('test-source-id');
  });
});
