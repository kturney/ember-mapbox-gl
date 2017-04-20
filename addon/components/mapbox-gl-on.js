import Ember from 'ember';

const {
  assert,
  Component,
  computed,
  get,
  getProperties,
  isPresent,
  run
} = Ember;

const MapboxGlOnComponent = Component.extend({
  tagName: '',

  eventSource: null,
  event: null,
  action: null,

  _prevEvent: null,

  init() {
    this._super(...arguments);

    this._boundOnEvent = run.bind(this, this._onEvent);
  },

  _normalizedEvent: computed('event', function() {
    const event = get(this, 'event');
    assert(`mapbox-gl-event requires event to be a string, was ${event}`, typeof event === 'string');

    return event.toLowerCase();
  }),

  didReceiveAttrs() {
    this._super(...arguments);

    const { eventSource, _normalizedEvent, _prevEvent, action } =
      getProperties(this, 'eventSource', '_normalizedEvent', '_prevEvent', 'action');

    assert('mapbox-gl-event requires an eventSource', isPresent(eventSource));
    assert('mapbox-gl-event requires an action', isPresent(action));

    if (_normalizedEvent !== _prevEvent) {
      if (_prevEvent) {
        eventSource.off(_prevEvent, this._boundOnEvent);
      }

      this._prevEvent = _normalizedEvent;
      eventSource.on(_normalizedEvent, this._boundOnEvent);
    }
  },

  willDestroy() {
    this._super(...arguments);

    const { eventSource, _prevEvent } = getProperties(this, 'eventSource', '_prevEvent');
    if (eventSource && _prevEvent) {
      eventSource.off(_prevEvent, this._boundOnEvent);
    }
  },

  _onEvent() {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    this.sendAction('action', ...arguments);
  }
});

MapboxGlOnComponent.reopenClass({
  positionalParams: [ 'event', 'action' ]
});

export default MapboxGlOnComponent;
