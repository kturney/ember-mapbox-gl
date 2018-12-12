'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    babel: {
      plugins: [
        // Ensure that `ember-auto-import` can handle the dynamic imports
        require('ember-auto-import/babel-plugin')
      ]
    }
  },

  addonJsFiles() {
    const Funnel = require('broccoli-funnel');
    const config = this._findHost().options[this.name];

    const tree = this._super.addonJsFiles.apply(this, arguments);

    if (config && config.lazyLoad === true) {
      return new Funnel(tree, {
        exclude: [ 'ember-mapbox-gl/-private/mapbox-loader-static.js' ],
        getDestinationPath(relativePath) {
          if (relativePath === 'ember-mapbox-gl/-private/mapbox-loader-dynamic.js') {
            return 'ember-mapbox-gl/-private/mapbox-loader.js';
          }

          return relativePath;
        }
      });
    }

    return new Funnel(tree, {
      exclude: [ 'ember-mapbox-gl/-private/mapbox-loader-dynamic.js' ],
      getDestinationPath(relativePath) {
        if (relativePath === 'ember-mapbox-gl/-private/mapbox-loader-static.js') {
          return 'ember-mapbox-gl/-private/mapbox-loader.js';
        }

        return relativePath;
      }
    });
  },

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
