# ember-mapbox-gl

[![Latest NPM release][npm-badge]][npm-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

[npm-badge]: https://img.shields.io/npm/v/ember-mapbox-gl.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-mapbox-gl
[travis-badge]: https://img.shields.io/travis/kturney/ember-mapbox-gl/master.svg
[travis-badge-url]: https://travis-ci.org/kturney/ember-mapbox-gl
[ember-observer-badge]: http://emberobserver.com/badges/ember-mapbox-gl.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-mapbox-gl

Ember integration with [mapbox-gl-js](https://www.mapbox.com/mapbox-gl-js/api/).

## Installation

```sh
ember install ember-mapbox-gl
```

Then, add your Mapbox access token: 
```javascript
module.exports = function(environment) {
  let ENV = {
    'mapbox-gl': {
      accessToken: 'ACCESS TOKEN HERE'
    },
}
```

## Example

```handlebars
{{#mapbox-gl as |map|}}
  {{#map.source data=wanderDrone as |source|}}
    {{source.layer layerType='symbol' layoutOptions=(hash icon-image='rocket-15')}}
  {{/map.source}}

  {{#if curLocation}}
    {{#map.marker lngLat=curLocation as |marker|}}
      {{#marker.popup}}
        This is where you are!
      {{/marker.popup}}
    {{/map.marker}}

    {{map.call 'easeTo' (hash center=curLocation)}}
  {{/if}}

  {{map.on 'click' (action 'onClick')}}
{{/mapbox-gl}}
```
