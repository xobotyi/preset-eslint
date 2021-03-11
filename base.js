const PRINT_WIDTH = 100;

module.exports = {
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],

  plugins: ['prettier', 'import'],

  rules: {
    'max-len': [
      'error',
      {
        code: PRINT_WIDTH,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        PRINT_WIDTH,
        singleQuote: true,
        jsxBracketSameLine: true,
        trailingComma: 'es5',
        endOfLine: 'lf',
      },
    ],

    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',

    'import/prefer-default-export': 'off',
  },
};
