/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const Path = require('path');

module.exports = {
  name: 'ember-mapbox-gl',

  treeForVendor(vendorTree) {
    const mapboxGlTree = new Funnel(Path.dirname(require.resolve('mapbox-gl/dist/mapbox-gl.js')), {
      files: [ 'mapbox-gl.js', 'mapbox-gl.css' ],
    });

    if (vendorTree) {
      return new MergeTrees([ vendorTree, mapboxGlTree ]);
    }

    return mapboxGlTree;
  },

  included() {
    this._super.included(...arguments);

    this.import('vendor/mapbox-gl.js', {
      using: [
        { transformation: 'amd', as: 'mapbox-gl' }
      ]
    });

    this.import('vendor/mapbox-gl.css');
  }
};
