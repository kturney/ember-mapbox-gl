import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMap from '../../helpers/create-map';

module('Integration | Component | mapbox gl marker', function(hooks) {
  setupRenderingTest(hooks);
  setupMap(hooks);

  test('it renders', async function(assert) {
    assert.expect(0);

    this.set('lngLat', [ 0, 0 ]);

    await render(hbs`{{mapbox-gl-marker map=map lngLat=lngLat MapboxGl=MapboxGl}}`);
  });
});
