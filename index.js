/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const Path = require('path');

module.exports = {
  name: 'ember-mapbox-gl',

  treeForStyles(tree) {
    const mapboxGlTree = new Funnel(Path.dirname(require.resolve('mapbox-gl')), {
      files: [ 'mapbox-gl.css' ],
      destDir: 'app/styles'
    });

    if (tree) {
      return new MergeTrees([ tree, mapboxGlTree ]);
    }

    return mapboxGlTree;
  },

  treeForVendor(tree) {
    const mapboxGlTree = new Funnel(Path.dirname(require.resolve('mapbox-gl')), {
      files: [
        'mapbox-gl.js',
        'mapbox-gl-dev.js'
      ],
      destDir: '/mapbox-gl'
    });

    if (tree) {
      return new MergeTrees([ tree, mapboxGlTree ]);
    }

    return mapboxGlTree;
  },

  included(app) {
    this._super.included.apply(this, arguments);

    const srcFile = process.env.EMBER_ENV === 'production'
      ? 'vendor/mapbox-gl/mapbox-gl.js'
      : 'vendor/mapbox-gl/mapbox-gl-dev.js';

    app.import(srcFile, {
      using: [
        { transformation: 'amd', as: 'mapbox-gl' }
      ]
    });

    app.import('app/styles/mapbox-gl.css');
  }
};
