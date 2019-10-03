import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mapbox gl on', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  test('it renders', async function(assert) {
    const done = assert.async();

    const event = {};

    this.set('eventSource', {
      on(eventName, cb) {
        assert.equal(eventName, 'onzoom', 'subscribes to event name');

        run.next(cb, event);
      },

      off() {}
    });

    this.actions.onEvent = (ev) => {
      assert.equal(ev, event, 'sends event to the action');
      done();
    };

    await render(hbs`{{mapbox-gl-on eventSource=eventSource event='onzoom' action=(action 'onEvent')}}`);
  });

  test('it works with positionalParams', async function(assert) {
    assert.expect(3);
    const done = assert.async();

    const event = {};

    this.set('eventSource', {
      on(eventName, cb) {
        assert.equal(eventName, 'onzoom', 'subscribes to event name');

        run.next(cb, event);
      },

      off(eventName) {
        assert.equal(eventName, 'onzoom', 'unsubscribes to event name');
      }
    });

    this.actions.onEvent = (ev) => {
      assert.equal(ev, event, 'sends event to the action');
      done();
    };

    await render(hbs`{{mapbox-gl-on 'onzoom' (action 'onEvent') eventSource=eventSource}}`);
  });

  test('it takes a layerId to target', async function(assert) {
    assert.expect(5);
    const done = assert.async();

    const event = {};

    this.set('eventSource', {
      on(eventName, source, cb) {
        assert.equal(eventName, 'onzoom', 'subscribes to event name');
        assert.equal(source, 'layer1', 'passes on layer');

        run.next(cb, event);
      },

      off(eventName, source) {
        assert.equal(eventName, 'onzoom', 'unsubscribes to event name');
        assert.equal(source, 'layer1', 'passes on layer');
      }
    });

    this.actions.onEvent = (ev) => {
      assert.equal(ev, event, 'sends event to the action');
      done();
    };

    await render(hbs`{{mapbox-gl-on 'onzoom' 'layer1' (action 'onEvent') eventSource=eventSource}}`);
  });
});
