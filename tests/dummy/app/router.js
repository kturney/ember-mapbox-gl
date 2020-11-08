import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('docs', function () {
    // docs homepage (required)
    this.route('usage');
    this.route('installation');
    this.route('container');
    this.route('sources-layers');
    this.route('actions');
    this.route('templates');
    this.route('contextual-components');

    this.route('components', function () {
      this.route('mapbox-gl');
      this.route('mapbox-gl-call');
      this.route('mapbox-gl-control');
      this.route('mapbox-gl-image');
      this.route('mapbox-gl-layer');
      this.route('mapbox-gl-marker');
      this.route('mapbox-gl-on');
      this.route('mapbox-gl-popup');
      this.route('mapbox-gl-source');
    }); // docs subpage
    this.route('api', function () {
      // autogenerated API homepage (required)
      this.route('item', { path: '/*path' }); // autogenerated API subpages (required)
    });
  });

  this.route('not-found', { path: '/*path' });
});
