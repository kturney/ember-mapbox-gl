'use strict';

module.exports = {
  name: require('./package').name,

  treeForStyles(tree) {
    const Funnel = require('broccoli-funnel');

    const mapboxDirName = require('path').dirname(require.resolve('mapbox-gl'));
    const mapboxGlTree = new Funnel(mapboxDirName, {
      files: [ 'mapbox-gl.css' ],
      destDir: 'app/styles'
    });

    if (tree) {
      const MergeTrees = require('broccoli-merge-trees');

      return new MergeTrees([ tree, mapboxGlTree ]);
    }

    return mapboxGlTree;
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('app/styles/mapbox-gl.css');
  }
};
