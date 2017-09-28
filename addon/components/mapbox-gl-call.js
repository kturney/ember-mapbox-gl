import Ember from 'ember';

const {
  assert,
  Component,
  getProperties,
  run: { scheduleOnce }
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
    if (args === null && params !== null) {
      if (func !== null) {
        args = params;
      } else {
        [ func, ...args ] = params;
      }
    }

    assert('mapbox-gl-call obj is required', typeof obj === 'object' && obj !== null);
    assert('mapbox-gl-call func is required and must be a string', typeof func === 'string');
    assert(`mapbox-gl-call ${func} must be a function on ${obj}`, typeof obj[func] === 'function');

    scheduleOnce('afterRender', () => {
      this.sendAction('onResp', obj[func].apply(obj, args));
    });
  }
});

MapboxGlCallComponent.reopenClass({
  positionalParams: 'params'
});

export default MapboxGlCallComponent;
