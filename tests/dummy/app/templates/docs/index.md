# Introduction

Ember integration with [`mapbox-gl-js`](https://docs.mapbox.com/mapbox-gl-js/api/).

## Installation

```sh
ember install ember-mapbox-gl
```

Then, add your Mapbox access token to `config/environment.js`:
```javascript
module.exports = function(environment) {
  let ENV = {
    'mapbox-gl': {
      accessToken: 'ACCESS TOKEN HERE'
    },
}
```

## Static Build

By default, `ember-mapbox-gl` will load the `mapbox-gl` library dynamically via [`ember-auto-import`'s dynamic import support](https://github.com/ef4/ember-auto-import#dynamic-import). If you would prefer for `mapbox-gl-js` to not be loaded dynamically, include an `import 'mapbox-gl';` somewhere in your app and `ember-auto-import` will include it in your vendor bundle.
