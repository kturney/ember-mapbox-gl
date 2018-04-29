import { Map } from 'mapbox-gl';
import { moduleForComponent, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-gl-popup', 'Integration | Component | mapbox gl popup', {
  integration: true,

  before() {
    this.map = new Map({ container: document.createElement('div') });
  },

  after() {
    this.map.remove();
  }
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{mapbox-gl-popup map=map}}`);
});

test('it bubbles events from yielded component mapbox-gl-on', function(assert) {
  assert.expect(3);
  const done = assert.async();

  const event = {};

  this.set('eventSource', {
    on(eventName, cb) {
      assert.equal(eventName, 'close', 'subscribes to lowercased event name');

      run.next(cb, event);
    },

    off(eventName) {
      assert.equal(eventName, 'close', 'unsubscribes to lowercased event name');
    }
  });

  this.on('onEvent', (ev) => {
    assert.equal(ev, event, 'sends event to the action');
    done();
  });

  this.render(hbs`
    {{#mapbox-gl-popup map=map as |popup|}}
      {{popup.on 'close' (action 'onEvent') eventSource=eventSource}}
    {{/mapbox-gl-popup}}
  `);
});
