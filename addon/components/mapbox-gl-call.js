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

  didReceiveAttrs() {
    this._super(...arguments);

    let { obj, func, args, params } = getProperties(this, 'obj', 'func', 'args', 'params');
    if (params) {
      if (func) {
        args = params;
      } else {
        [ func, ...args ] = params;
      }
    }

    assert('mapbox-gl-call obj is required', obj);
    assert('mapbox-gl-call func is required', func);
    assert(`mapbox-gl-call ${func} must be a function on ${obj}`, typeof obj[func] === 'function');

    this.sendAction('onResp', obj[func].apply(obj, args));
  }
});

MapboxGlCallComponent.reopenClass({
  positionalParams: 'params'
});

export default MapboxGlCallComponent;
