'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      skipBabel: [{ package: 'mapbox-gl', semverRange: '*' }]
    },

    babel: {
      plugins: [
        // Ensure that `ember-auto-import` can handle the dynamic imports
        require('ember-auto-import/babel-plugin')
      ]
    }
  },

  included(app) {
    this._super.included.apply(this, arguments);

    const path = require('path');
    const mapboxDirName = path.dirname(require.resolve('mapbox-gl'));

    app.import(path.join(
      mapboxDirName.slice(mapboxDirName.lastIndexOf('node_modules')),
      'mapbox-gl.css'
    ));
  }
};
