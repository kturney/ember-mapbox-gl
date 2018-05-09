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
        this._srcFile()
      ],
      destDir: '/mapbox-gl'
    });

    if (tree) {
      return new MergeTrees([ tree, mapboxGlTree ]);
    }

    return mapboxGlTree;
  },

  treeForPublic(tree) {
    if (process.env.EMBER_ENV === 'production') {
      const mapboxGlTree = new Funnel(Path.dirname(require.resolve('mapbox-gl')), {
        files: [
          'mapbox-gl.js.map'
        ],
        destDir: '/assets'
      });
  
      if (tree) {
        return new MergeTrees([ tree, mapboxGlTree ]);
      }
  
      return mapboxGlTree;
    }

    return tree;
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/mapbox-gl/' + this._srcFile(), {
      using: [
        { transformation: 'amd', as: 'mapbox-gl' }
      ]
    });

    app.import('app/styles/mapbox-gl.css');
  },

  _srcFile() {
    return process.env.EMBER_ENV === 'production'
      ? 'mapbox-gl.js'
      : 'mapbox-gl-dev.js';
  }
};
