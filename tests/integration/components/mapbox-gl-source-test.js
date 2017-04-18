import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import FakeMap from '../../helpers/fake-map';

moduleForComponent('mapbox-gl-source', 'Integration | Component | mapbox gl source', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  this.set('map', new FakeMap());
  this.set('data', 'https://wanderdrone.appspot.com');

  this.render(hbs`{{mapbox-gl-source map=map data=data}}`);
});
