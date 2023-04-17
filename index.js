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
};
