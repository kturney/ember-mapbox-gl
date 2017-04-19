import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const {
  run
} = Ember;

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

  this.render(hbs`{{mapbox-gl-on 'onZoom' (action 'onEvent') eventSource=eventSource}}`);
});
