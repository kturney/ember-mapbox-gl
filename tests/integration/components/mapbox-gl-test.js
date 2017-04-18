import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-gl', 'Integration | Component | mapbox gl', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{mapbox-gl}}`);

  // Template block usage:
  this.render(hbs`
    {{#mapbox-gl as |map|}}

    {{/mapbox-gl}}
  `);
});
