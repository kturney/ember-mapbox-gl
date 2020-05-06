'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      skipBabel: [{ package: 'mapbox-gl', semverRange: '*' }],
    },

    babel: {
      // Ensure that `ember-auto-import` can handle the dynamic imports
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },

  included(app) {
    this._super.included.apply(this, arguments);

    const path = require('path');
    const mapboxPkg = require(require.resolve('mapbox-gl/package.json', {
      paths: [app.project.root],
    }));
    const stylesPath = require.resolve(`mapbox-gl/${mapboxPkg.style}`, {
      paths: [app.project.root],
    });

    app.import(path.relative(app.project.root, stylesPath));
  },
};
