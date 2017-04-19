import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mapbox-gl-call', 'Integration | Component | mapbox gl call', {
  integration: true
});

test('it calls the function on the object', function(assert) {
  let calledArgs = null;
  let calledContext = null;
  let receivedResp = null;

  const expectedResp = 'kyle turney';
  const obj = {
    func(...args) {
      calledArgs = args;
      calledContext = this;
      return expectedResp;
    }
  };
  const passedArgs = [ 'a', 1, 'z' ];

  this.set('obj', obj);
  this.set('args', passedArgs);
  this.on('onResp', (resp) => {
    receivedResp = resp;
  });

  this.render(hbs`{{mapbox-gl-call obj=obj func='func' args=args onResp=(action 'onResp')}}`);

  assert.deepEqual(calledArgs, passedArgs, 'should pass on args');
  assert.equal(calledContext, obj, 'should set the context to the obj');
  assert.equal(receivedResp, expectedResp, 'should call the onResp action with the obj.func result');
});

test('it works with positionalParams', function(assert) {
  let calledArgs = null;
  let calledContext = null;
  let receivedResp = null;

  const expectedResp = 'kyle turney';
  const obj = {
    func(...args) {
      calledArgs = args;
      calledContext = this;
      return expectedResp;
    }
  };

  this.set('obj', obj);
  this.on('onResp', (resp) => {
    receivedResp = resp;
  });

  this.render(hbs`{{mapbox-gl-call 'func' 'a' 1 'z' obj=obj onResp=(action 'onResp')}}`);

  assert.deepEqual(calledArgs, [ 'a', 1, 'z' ], 'should pass on args');
  assert.equal(calledContext, obj, 'should set the context to the obj');
  assert.equal(receivedResp, expectedResp, 'should call the onResp action with the obj.func result');
});
