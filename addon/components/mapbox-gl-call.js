import Ember from 'ember';

const {
  assert,
  Component,
  getProperties
} = Ember;

const MapboxGlCallComponent = Component.extend({
  tagName: '',

  obj: null,
  func: null,
  args: null,
  onResp: null,
  params: null,

  didReceiveAttrs() {
    this._super(...arguments);

    let { obj, func, args, params } = getProperties(this, 'obj', 'func', 'args', 'params');
    if (params !== null) {
      if (func) {
        args = params;
      } else {
        [ func, ...args ] = params;
      }
    }

    assert('mapbox-gl-call obj is required', typeof obj === 'object' && obj !== null);
    assert('mapbox-gl-call func is required and must be a string', typeof func === 'string');
    assert(`mapbox-gl-call ${func} must be a function on ${obj}`, typeof obj[func] === 'function');

    console.log('MapboxGlCallComponent args', args);

    this.sendAction('onResp', obj[func].apply(obj, args));
  }
});

MapboxGlCallComponent.reopenClass({
  positionalParams: 'params'
});

export default MapboxGlCallComponent;
