/* eslint-env node */
module.exports = {
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
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
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
    }
  ]
};
