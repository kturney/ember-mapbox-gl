/* eslint-disable */
import itemRoute from 'ember-cli-addon-docs/routes/docs/api/item';
import { assert } from '@ember/debug';

export default itemRoute.extend({
  // overriding due to this issue: https://github.com/ember-learn/ember-cli-addon-docs/issues/149
  model({ path }) {
    let item;
    const lastPathSegment = path.split('/').pop();
    console.log(lastPathSegment, path);
    if (path.match(/^root\//)) {
      // Find by fully qualified id
      let itemId = path.replace(/^root\//, '');
      let [moduleId] = itemId.split('~');

      let module = this.store.peekRecord('module', moduleId);

      item = module.get('components').findBy('id', itemId)
        || module.get('classes').findBy('id', itemId)
        || module;
    } else {
      let modules = this.store.peekAll('module');
      // let matches = modules.filter(m => m.id.match(path));
      let matches = modules.filter(m => (m.get('file') === `/${path}`));
      let module = matches[0];

      assert(`no modules match the path '${path}'`, matches.length > 0);
      assert(`multiple modules match the path '${path}', ids: ${matches.mapBy('id').join(', ')}`, matches.length <= 1);

      item = module.get('components').findBy('exportType', 'default')
        || module.get('classes').findBy('exportType', 'default')
        || module;
    }

    assert(`item not found for path '${path}'`, item);

    return item;
  }
});
