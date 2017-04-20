import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-gl-call', 'Integration | Component | mapbox gl call', {
  integration: true
});

test('it calls the function on the object', function(assert) {
  const passedArgs = [ 'a', 1, 'z' ];
  const expectedResp = 'kyle turney';
  const obj = {
    func(...args) {
      assert.propEqual(args, passedArgs, 'should pass on args');
      assert.equal(this, obj, 'should set the context to the obj');

      return expectedResp;
    }
  };

  this.set('obj', obj);
  this.set('args', passedArgs);
  this.on('onResp', (resp) => {
    assert.equal(resp, expectedResp, 'should call the onResp action with the obj.func result');
  });

  this.render(hbs`{{mapbox-gl-call obj=obj func='func' args=args onResp=(action 'onResp')}}`);
});

test('it works with positionalParams', function(assert) {
  const expectedResp = 'kyle turney';
  const obj = {
    func(...args) {
      assert.propEqual(args, [ 'a', 1, 'z' ], 'should pass on args');
      assert.equal(this, obj, 'should set the context to the obj');

      return expectedResp;
    }
  };

  this.set('obj', obj);
  this.on('onResp', (resp) => {
    assert.equal(resp, expectedResp, 'should call the onResp action with the obj.func result');
  });

  this.render(hbs`{{mapbox-gl-call 'func' 'a' 1 'z' obj=obj onResp=(action 'onResp')}}`);
});
