import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitFor } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mapbox gl', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(0);

    // Template block usage:
    await render(hbs`
      {{#mapbox-gl as |map|}}
        <div id='loaded-sigil'></div>
      {{/mapbox-gl}}
    `);

    await waitFor('#loaded-sigil');
  });
});
