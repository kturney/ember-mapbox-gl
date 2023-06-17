import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMap from '../../helpers/create-map';

module('Integration | Component | mapbox gl popup', function (hooks) {
  setupMap(hooks);
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(0);

    await render(
      hbs`<MapboxGlPopup @map={{this.map}} @MapboxGl={{this.MapboxGl}}/>`
    );
  });

  test('popup events can be subscribed to from the template', async function (assert) {
    this.onClose = () => {
      assert.step('onClose');
    };

    this.set('lngLat', [-30.9688, 36.1314]);

    await render(hbs`
      <MapboxGlPopup @map={{this.map}} @MapboxGl={{this.MapboxGl}} @lngLat={{this.lngLat}} as |popup|>
        {{popup.on 'close' this.onClose}}
      </MapboxGlPopup>
    `);

    await click('.mapboxgl-popup-close-button');

    assert.verifySteps(['onClose']);
  });

  test('it handles re-renders on map clicks after closing', async function (assert) {
    this.set('lngLat', [-93.9688, 37.1314]);

    await render(hbs`
      <MapboxGlPopup @lngLat={{this.lngLat}} @map={{this.map}} @MapboxGl={{this.MapboxGl}}>
        Hi
      </MapboxGlPopup>
    `);

    await click('.mapboxgl-popup-close-button');

    this.set('lngLat', [-30.9688, 36.1314]);

    assert.dom('.mapboxgl-popup-content').containsText('Hi');
  });
});
