'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    [require('./package').name]: {
      lazyLoad: process.env.LAZY_LOAD === 'true'
    }
  });

  return app.toTree();
};
