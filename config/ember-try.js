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
          name: 'ember-lts-2.12',
          npm: {
            devDependencies: {
              'ember-source': '~2.12.0'
            }
          }
        },
        {
          name: 'ember-lts-2.16',
          npm: {
            devDependencies: {
              'ember-source': '~2.16.0'
            }
          }
        },
        {
          name: 'ember-lts-2.18',
          npm: {
            devDependencies: {
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
          name: 'ember-default',
          npm: {
            devDependencies: {}
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.38',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.38.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.39',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.39.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.40',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.40.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.41',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.41.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.42',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.42.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.43',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.43.0'
            }
          }
        },
        {
          name: 'ember-default-mapbox-gl-0.44',
          npm: {
            devDependencies: {
              'mapbox-gl': '^0.44.0'
            }
          }
        }
      ]
    };
  });
};
