'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = function() {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta')
  ]).then(([ releaseUrl, betaUrl ]) => {
    return {
      useYarn: true,

      scenarios: [
        {
          name: 'ember-lts-2.16',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true })
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': '~2.16.0'
            }
          }
        },
        {
          name: 'ember-lts-2.18',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true })
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': '~2.18.0'
            }
          }
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': releaseUrl
            }
          }
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': betaUrl
            }
          }
        },
        {
          name: 'ember-default-lazy',
          env: {
            LAZY_LOAD: 'true'
          },
          npm: {
            devDependencies: {}
          }
        },
        {
          name: 'ember-default-with-jquery',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({
              'jquery-integration': true
            })
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.46',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.46.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.47',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.47.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.48',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.48.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.49',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.49.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.50',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.50.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.51',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.51.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.52',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.52.0'
            }
          }
        }
      ]
    };
  });
};
