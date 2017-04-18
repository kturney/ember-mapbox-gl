import { moduleForComponent, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import FakeMap from '../../helpers/fake-map';

moduleForComponent('mapbox-gl-marker', 'Integration | Component | mapbox gl marker', {
  integration: true
});

skip('it renders', function(assert) {
  assert.expect(0);

  this.set('map', new FakeMap());
  this.set('lngLat', [ 0, 0 ]);

  this.render(hbs`{{mapbox-gl-marker map=map lngLat=lngLat}}`);
});
