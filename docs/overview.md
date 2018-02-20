# `ember-mapbox-gl`

[mapbox-gl-js](https://www.mapbox.com/mapbox-gl-js/api/) bindings to Ember.
Aims to be a fairly thin wrapper around the mapbox API.

## General flow
Using this addon will mostly consist of creating a map (or maps), adding [sources of data](https://www.mapbox.com/mapbox-gl-js/style-spec/#sources) to the map, adding [layers](https://www.mapbox.com/mapbox-gl-js/style-spec/#layers) to render the data from the sources, and calling [functions on the map](https://www.mapbox.com/mapbox-gl-js/api/#map) to manipulate the camera.

## API
* [environment configuration](./config/environment.md)
* [mapbox-gl](./components/mapbox-gl.md)
