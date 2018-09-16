import { assert } from '@ember/debug';
import { getProperties, get, computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { run } from '@ember/runloop';
import Component from '@ember/component';

const MapboxGlOnComponent = Component.extend({
  tagName: '',

  eventSource: null,
  event: null,
  layerId: null,
  action: null,

  _prevEvent: null,
  _prevLayerId: null,

  _event: computed('event', function () {
    const event = get(this, 'event');
    assert(`mapbox-gl-event requires event to be a string, was ${event}`, typeof event === 'string');

    return event.toLowerCase();
  }),

  _layerId: computed('layerId', '_action', function () {
    const { layerId, _action } = getProperties(this, 'layerId', '_action');
    if (layerId === _action) {
      return null;
    }

    return layerId;
  }),

  _action: computed('layerId', 'action', function() {
    const { layerId, action } = getProperties(this, 'layerId', 'action');
    return action || layerId;
  }),

  init() {
    this._super(...arguments);

    this._boundOnEvent = run.bind(this, this._onEvent);
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const { eventSource, _layerId, _event, _prevEvent, _prevLayerId, _action } =
      getProperties(this, 'eventSource', '_layerId', '_event', '_prevEvent', '_prevLayerId', '_action');

    assert('mapbox-gl-event requires an eventSource', isPresent(eventSource));
    assert('mapbox-gl-event requires an action', isPresent(_action));

    if (_event !== _prevEvent || _layerId !== _prevLayerId) {
      if (_prevEvent) {
        if (_prevLayerId) {
          eventSource.off(_prevEvent, _prevLayerId, this._boundOnEvent);
        } else {
          eventSource.off(_prevEvent, this._boundOnEvent);
        }
      }

      this._prevEvent = _event;
      this._prevLayerId = _layerId;

      if (_layerId) {
        eventSource.on(_event, _layerId, this._boundOnEvent);
      } else {
        eventSource.on(_event, this._boundOnEvent);
      }
    }
  },

  willDestroy() {
    this._super(...arguments);

    const { eventSource, _prevEvent, _prevLayerId } = getProperties(this, 'eventSource', '_prevEvent', '_prevLayerId');
    if (eventSource && _prevEvent) {
      if (_prevLayerId) {
        eventSource.off(_prevEvent, _prevLayerId, this._boundOnEvent);
      } else {
        eventSource.off(_prevEvent, this._boundOnEvent);
      }
    }
  },

  _onEvent() {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    get(this, '_action')(...arguments);
  }
});

MapboxGlOnComponent.reopenClass({
  positionalParams: [ 'event', 'layerId', 'action' ]
});

export default MapboxGlOnComponent;
