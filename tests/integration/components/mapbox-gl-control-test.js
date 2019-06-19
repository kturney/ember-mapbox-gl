import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMap from '../../helpers/create-map';

module('Integration | Component | mapbox gl control', function(hooks) {
  setupRenderingTest(hooks);
  setupMap(hooks);

  test('it renders', async function(assert) {
    assert.expect(0);

    await render(hbs`{{mapbox-gl-control map=map}}`);
  });
});
