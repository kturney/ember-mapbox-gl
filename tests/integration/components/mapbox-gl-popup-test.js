import { Map } from 'mapbox-gl';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-gl-popup', 'Integration | Component | mapbox gl popup', {
  integration: true,

  before() {
    this.map = new Map({ container: document.createElement('div') });
  },

  after() {
    this.map.remove();
  }
});

test('it renders', function(assert) {
  assert.expect(0);

  this.render(hbs`{{mapbox-gl-popup map=map}}`);
});
