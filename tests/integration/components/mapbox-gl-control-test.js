import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import FakeMap from '../../helpers/fake-map';

moduleForComponent('mapbox-gl-control', 'Integration | Component | mapbox gl control', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.set('map', new FakeMap());

  this.render(hbs`{{mapbox-gl-control map=map}}`);
});
