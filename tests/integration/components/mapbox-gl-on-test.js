import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-gl-on', 'Integration | Component | mapbox gl on', {
  integration: true
});

test('it renders', function(assert) {
  const done = assert.async();

  const event = {};

  this.set('eventSource', {
    on(eventName, cb) {
      assert.equal(eventName, 'onzoom', 'subscribes to lowercased event name');

      run.next(cb, event);
    },

    off() {}
  });

  this.on('onEvent', (ev) => {
    assert.equal(ev, event, 'sends event to the action');
    done();
  });

  this.render(hbs`{{mapbox-gl-on eventSource=eventSource event='onZoom' action=(action 'onEvent')}}`);
});

test('it works with positionalParams', function(assert) {
  assert.expect(3);
  const done = assert.async();

  const event = {};

  this.set('eventSource', {
    on(eventName, cb) {
      assert.equal(eventName, 'onzoom', 'subscribes to lowercased event name');

      run.next(cb, event);
    },

    off(eventName) {
      assert.equal(eventName, 'onzoom', 'unsubscribes to lowercased event name');
    }
  });

  this.on('onEvent', (ev) => {
    assert.equal(ev, event, 'sends event to the action');
    done();
  });

  this.render(hbs`{{mapbox-gl-on 'onZoom' (action 'onEvent') eventSource=eventSource}}`);
});

test('it takes a layerId to target', function (assert) {
  assert.expect(5);
  const done = assert.async();

  const event = {};

  this.set('eventSource', {
    on(eventName, source, cb) {
      assert.equal(eventName, 'onzoom', 'subscribes to lowercased event name');
      assert.equal(source, 'layer1', 'passes on layer');

      run.next(cb, event);
    },

    off(eventName, source) {
      assert.equal(eventName, 'onzoom', 'unsubscribes to lowercased event name');
      assert.equal(source, 'layer1', 'passes on layer');
    }
  });

  this.on('onEvent', (ev) => {
    assert.equal(ev, event, 'sends event to the action');
    done();
  });

  this.render(hbs`{{mapbox-gl-on 'onZoom' 'layer1' (action 'onEvent') eventSource=eventSource}}`);
});
