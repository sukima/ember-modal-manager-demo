'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['@typescript-eslint', 'ember'],
  extends: [],
  env: {
    browser: true,
  },
  rules: {},
  overrides: [
    // app files
    {
      files: ['./app/**/*.{js,ts}', './tests/**/*.{js,ts}'],
      extends: [
        'eslint:recommended',
        'plugin:ember/recommended',
        'plugin:prettier/recommended',
      ],
      rules: { 'prefer-const': 'off' },
    },
    {
      files: ['./app/**/*.ts', './tests/**/*.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: { 'prefer-const': 'off' },
    },
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
        'prefer-const': 'off',
      },
    },
    {
      // test files
      files: ['tests/**/*.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
};
