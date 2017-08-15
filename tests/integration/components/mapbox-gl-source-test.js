import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import FakeMap from '../../helpers/fake-map';
import Ember from 'ember';

const {
  assign
} = Ember;

moduleForComponent('mapbox-gl-source', 'Integration | Component | mapbox gl source', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.set('map', new FakeMap());
  this.set('data', 'https://wanderdrone.appspot.com');

  this.render(hbs`{{mapbox-gl-source map=map data=data}}`);
});

test('it accepts a sourceId, dataType, and data', function(assert) {
  assert.expect(3);

  const sourceId = 'evewvrwvwrvw';
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

  this.setProperties({
    data: sourceOptions.data,
    dataType: sourceOptions.type,
    sourceId,
    map: {
      addSource(addedSourceId, addedOptions) {
        assert.equal(addedSourceId, sourceId, 'correct sourceId is added');
        assert.deepEqual(addedOptions, sourceOptions, 'correct source options');
      },

      removeSource(removedSourceId) {
        assert.equal(removedSourceId, sourceId, 'correct sourceId is removed');
      }
    }
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId data=data dataType=dataType}}`);
});

test('it creates a sourceId if one is not provided', function(assert) {
  assert.expect(2);

  let generatedSourceId = null;

  this.setProperties({
    map: {
      addSource(addedSourceId) {
        assert.ok(addedSourceId, 'a sourceId is added');
        generatedSourceId = addedSourceId;
      },

      removeSource(removedSourceId) {
        assert.equal(removedSourceId, generatedSourceId, 'correct sourceId is removed');
      }
    }
  });

  this.render(hbs`{{mapbox-gl-source map=map}}`);
});

test('it accepts source options as an options object', function(assert) {
  assert.expect(3);

  const sourceId = 'evewvrwvwrvw';
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

  this.setProperties({
    options: sourceOptions,
    sourceId,
    map: {
      addSource(addedSourceId, addedOptions) {
        assert.equal(addedSourceId, sourceId, 'correct sourceId is added');
        assert.deepEqual(addedOptions, sourceOptions, 'correct source options');
      },

      removeSource(removedSourceId) {
        assert.equal(removedSourceId, sourceId, 'correct sourceId is removed');
      }
    }
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId options=options}}`);
});

test('it passes updated data on to the source via the data property', function(assert) {
  assert.expect(5);

  const sourceId = 'evewvrwvwrvw';
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

  const updatedData = 'hvehvehvhvhvh vhlhvvweih w';

  this.setProperties({
    data: sourceOptions.data,
    dataType: sourceOptions.type,
    sourceId,
    map: {
      addSource(addedSourceId, addedOptions) {
        assert.equal(addedSourceId, sourceId, 'correct sourceId is added');
        assert.deepEqual(addedOptions, sourceOptions, 'correct source options');
      },

      removeSource(removedSourceId) {
        assert.equal(removedSourceId, sourceId, 'correct sourceId is removed');
      },

      getSource(getSourceId) {
        assert.equal(getSourceId, sourceId, 'gets correct sourceId');
        return {
          setData(setData) {
            assert.deepEqual(setData, updatedData, 'correct data is updated');
          }
        }
      }
    }
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId data=data dataType=dataType}}`);

  this.set('data', updatedData);
});

test('it passes updated data on to the source via the options property', function(assert) {
  assert.expect(5);

  const sourceId = 'evewvrwvwrvw';
  const origData = {
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
  };

  const updatedData = 'hvehvehvhvhvh vhlhvvweih w';

  this.setProperties({
    data: origData,
    sourceId,
    map: {
      addSource(addedSourceId, addedOptions) {
        assert.equal(addedSourceId, sourceId, 'correct sourceId is added');
        assert.deepEqual(addedOptions, { type: 'geojson', data: origData }, 'correct source options');
      },

      removeSource(removedSourceId) {
        assert.equal(removedSourceId, sourceId, 'correct sourceId is removed');
      },

      getSource(getSourceId) {
        assert.equal(getSourceId, sourceId, 'gets correct sourceId');
        return {
          setData(setData) {
            assert.deepEqual(setData, updatedData, 'correct data is updated');
          }
        }
      }
    }
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId options=(hash type='geojson' data=data)}}`);

  this.set('data', updatedData);
});

test('it passes updated coordinates on to the source via the options property', function(assert) {
  assert.expect(5);

  const sourceId = 'evewvrwvwrvw';
  const sourceOptions = {
    type: 'video',
    url: [
      'https://www.mapbox.com/blog/assets/baltimore-smoke.mp4',
      'https://www.mapbox.com/blog/assets/baltimore-smoke.webm'
    ],
    coordinates: [
      [-76.54, 39.18],
      [-76.52, 39.18],
      [-76.52, 39.17],
      [-76.54, 39.17]
    ]
  };

  const updatedCoordinates = [
    [-76.54335737228394, 39.18579907229748],
    [-76.52803659439087, 39.1838364847587],
    [-76.5295386314392, 39.17683392507606],
    [-76.54520273208618, 39.17876344106642]
  ];

  this.setProperties({
    options: sourceOptions,
    sourceId,
    map: {
      addSource(addedSourceId, addedOptions) {
        assert.equal(addedSourceId, sourceId, 'correct sourceId is added');
        assert.deepEqual(addedOptions, sourceOptions, 'correct source options');
      },

      removeSource(removedSourceId) {
        assert.equal(removedSourceId, sourceId, 'correct sourceId is removed');
      },

      getSource(getSourceId) {
        assert.equal(getSourceId, sourceId, 'gets correct sourceId');
        return {
          setCoordinates(setCoordinates) {
            assert.deepEqual(setCoordinates, updatedCoordinates, 'correct coordinates is updated');
          }
        }
      }
    }
  });

  this.render(hbs`{{mapbox-gl-source map=map sourceId=sourceId options=options}}`);

  this.set('options', assign({}, sourceOptions, { coordinates: updatedCoordinates }));
});
