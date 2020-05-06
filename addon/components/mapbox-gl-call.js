import { assert } from '@ember/debug';
import { scheduleOnce, cancel } from '@ember/runloop';
import Component from '@ember/component';

/**
 * A component used to call a specific Mapbox GL method.
 *
 * @class MapboxGLCallComponent
 */
const MapboxGlCallComponent = Component.extend({
  tagName: '',

  obj: null,
  func: null,
  args: null,
  onResp() {},
  params: null,

  _scheduledCall: null,

  didReceiveAttrs() {
    this._super(...arguments);

    let { obj, func, args, params } = this;
    if (args === null && params !== null) {
      if (func !== null) {
        args = params;
      } else {
        [func, ...args] = params;
      }
    }

    assert(
      'mapbox-gl-call obj is required',
      typeof obj === 'object' && obj !== null
    );
    assert(
      'mapbox-gl-call func is required and must be a string',
      typeof func === 'string'
    );
    assert(
      `mapbox-gl-call ${func} must be a function on ${obj}`,
      typeof obj[func] === 'function'
    );

    this._scheduledCall = scheduleOnce(
      'afterRender',
      this,
      this._call,
      obj,
      func,
      args
    );
  },

  willDestroy() {
    this._super(...arguments);

    if (this._scheduledCall !== null) {
      cancel(this._scheduledCall);
    }
  },

  _call(obj, func, args) {
    this._scheduledCall = null;

    this.onResp(obj[func].apply(obj, args));
  },
});

MapboxGlCallComponent.reopenClass({
  positionalParams: 'params',
});

export default MapboxGlCallComponent;
