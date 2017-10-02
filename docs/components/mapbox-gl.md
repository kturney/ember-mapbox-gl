# `mapbox-gl` Component

Component that creates a new [mapbox-gl-js instance](https://www.mapbox.com/mapbox-gl-js/api/).


## Properties
- `initOptions`
  - An options hash to pass on to the [mapbox constructor](https://www.mapbox.com/mapbox-gl-js/api/#map). This is only used during map construction, and updates will have no effect.
- `mapLoaded`
  - action function to call when the map has finished loading. Note that the component does not yield until the map has loaded, so this is the only way to listen for the mapbox load event.


## Yielded API
- call: call a function on the map
- control: add a [mapbox control](https://www.mapbox.com/mapbox-gl-js/api/#icontrol) to the map
- image: add an image for use in the map, see [here](https://www.mapbox.com/mapbox-gl-js/api/#map#addimage)
- layer: add a [layer](https://www.mapbox.com/mapbox-gl-js/style-spec/#layers) to the map
- marker: add a [marker](https://www.mapbox.com/mapbox-gl-js/api/#marker) to the map
- on: add a action to listen for [mapbox events](https://www.mapbox.com/mapbox-gl-js/api/#map#on)
- popup: add a [popup](https://www.mapbox.com/mapbox-gl-js/api/#popup) to the map
- source: add a [source](https://www.mapbox.com/mapbox-gl-js/api/#sources) to the map

## Example

```hbs
{{#mapbox-gl initOptions=(hash ...propsHere) mapLoaded=(action 'mapLoaded) as |map|}}
  {{map.call 'funcName' ...args}}

  {{map.control control position}}

  {{map.image 'name' 'image/path'}}

  {{map.layer layer=(hash ...layerOptions)}}

  {{map.marker lngLat=coordinates initOptions=(hash ...opts)}}

  {{map.on 'event-name' (action 'onEvent')}}

  {{#map.popup lngLat=coordinates}}
    <!-- popup content here -->
  {{/map.popup}}

  {{#map.source options=(hash ...sourceOptions) as |source|}}
    {{source.layer layer=(hash ...layerOptions)}}
  {{/map.source}}
{{/mapbox-gl}}
```
