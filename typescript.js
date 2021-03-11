module.exports = {
  extends: [
    './base',
    'plugin:import/typescript',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
  },

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'no-console': 'off',

    'import/prefer-default-export': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
  },
};
