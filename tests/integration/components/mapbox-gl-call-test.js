import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mapbox gl call', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  test('it calls the function on the object', async function(assert) {
    const expectedArgs = [ 'a', 1, 'z' ];
    const expectedResp = 'kyle turney';
    const obj = {
      func(...args) {
        assert.deepEqual(args, expectedArgs, 'should pass on args');
        assert.equal(this, obj, 'should set the context to the obj');

        return expectedResp;
      }
    };

    this.set('obj', obj);
    this.set('args', expectedArgs);
    this.actions.onResp = (resp) => {
      assert.equal(resp, expectedResp, 'should call the onResp action with the obj.func result');
    };

    await render(hbs`{{mapbox-gl-call obj=obj func='func' args=args onResp=(action 'onResp')}}`);
  });

  test('it works with positionalParams', async function(assert) {
    const expectedResp = 'kyle turney';
    const obj = {
      func(...args) {
        assert.deepEqual(args, [ 'a', 1, 'z' ], 'should pass on args');
        assert.equal(this, obj, 'should set the context to the obj');

        return expectedResp;
      }
    };

    this.set('obj', obj);
    this.actions.onResp = (resp) => {
      assert.equal(resp, expectedResp, 'should call the onResp action with the obj.func result');
    };

    await render(hbs`{{mapbox-gl-call 'func' 'a' 1 'z' obj=obj onResp=(action 'onResp')}}`);
  });
});
