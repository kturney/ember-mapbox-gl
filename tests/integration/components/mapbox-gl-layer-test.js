import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import FakeMap from '../../helpers/fake-map';

moduleForComponent('mapbox-gl-layer', 'Integration | Component | mapbox gl layer', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.set('map', new FakeMap());

  this.render(hbs`{{mapbox-gl-layer map=map}}`);
});
