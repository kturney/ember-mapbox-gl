import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMap from '../../helpers/create-map';

module('Integration | Component | mapbox gl popup', function (hooks) {
  setupRenderingTest(hooks);
  setupMap(hooks);

  test('it renders', async function (assert) {
    assert.expect(0);

    await render(hbs`{{mapbox-gl-popup map=map MapboxGl=MapboxGl}}`);
  });

  test('popup events can be subscribed to from the template', async function (assert) {
    this.onClose = () => {
      assert.step('onClose');
    };

    await render(hbs`
      {{#mapbox-gl-popup map=map MapboxGl=MapboxGl as |popup|}}
        {{popup.on 'close' onClose}}
      {{/mapbox-gl-popup}}
    `);

    // popups close when the map is clicked
    this.map.fire('click');

    assert.verifySteps(['onClose']);
  });

  test('it handles re-renders on map clicks after closing', async function (assert) {
    assert.expect(1);

    this.set('clicked', { lngLat: { lng: -93.9688, lat: 37.1314 } });

    await render(hbs`
      {{#mapbox-gl-popup lngLat=(array this.clicked.lngLat.lng this.clicked.lngLat.lat) map=map MapboxGl=MapboxGl}}
        Hi
      {{/mapbox-gl-popup}}
    `);

    await click('.mapboxgl-popup-close-button');

    this.set('clicked', { lngLat: { lng: -30.9688, lat: 36.1314 } });

    assert.dom('.mapboxgl-popup-content').containsText('Hi');
  });
});
