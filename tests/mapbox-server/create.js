/* global FakeXMLHttpRequest */

import Pretender from 'pretender';
import Sprites from './data/sprites';
import SpritesPng from './data/sprites-png';
import Style from './data/style';
import Terrain from './data/terrain';

// have to monkeypatch until https://github.com/pretenderjs/FakeXMLHttpRequest/issues/31 is fixed :-(

FakeXMLHttpRequest.prototype._setResponseBody = function _setResponseBody(body) {
  var chunkSize = this.chunkSize || 10;
  var index = 0;
  this.responseText = "";

  do {
    if (this.async) {
      this._readyStateChange(FakeXMLHttpRequest.LOADING);
    }

    this.responseText += body.substring(index, index + chunkSize);
    index += chunkSize;
  } while (index < body.length);

  this.response = this.responseText

  if (this.async) {
    this._readyStateChange(FakeXMLHttpRequest.DONE);
  } else {
    this.readyState = FakeXMLHttpRequest.DONE;
  }
};

export default function create() {
  return new Pretender(function() {
    this.get('https://api.mapbox.com/styles/v1/mapbox/streets-v9', function() {
      return [ 200, { 'content-type': 'application/json' }, Style ];
    });

    this.get('https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7.json', function() {
      return [ 200, { 'content-type': 'application/json' }, Terrain ];
    });

    this.get('https://api.mapbox.com/styles/v1/mapbox/streets-v9/sprite@2x.json', function() {
      return [ 200, { 'content-type': 'application/json' }, Sprites ];
    });

    this.get('https://api.mapbox.com/styles/v1/mapbox/streets-v9/sprite@2x.png', function() {
      return [ 200, {}, SpritesPng ];
    });
  });
}
