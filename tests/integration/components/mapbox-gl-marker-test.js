import { Map } from 'mapbox-gl';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mapbox gl marker', function(hooks) {
  setupRenderingTest(hooks);

  hooks.before(function() {
    this.map = new Map({ container: document.createElement('div') });
  });

  hooks.after(function() {
    this.map.remove();
  });

  test('it renders', async function(assert) {
    assert.expect(0);

    this.set('lngLat', [ 0, 0 ]);

    await render(hbs`{{mapbox-gl-marker map=map lngLat=lngLat}}`);
  });
});
