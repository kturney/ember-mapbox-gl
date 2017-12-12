module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/no-jquery': 'error',
    'ember/no-observers': 'error',
    'ember/order-in-components': 'error',
    'ember/use-ember-get-and-set': 'error'
  }
};
