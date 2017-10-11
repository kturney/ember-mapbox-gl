module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/base'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember/named-functions-in-promises': 'off',
    'ember/new-module-imports': 'error',
    'ember/no-jquery': 'error'
  }
};
