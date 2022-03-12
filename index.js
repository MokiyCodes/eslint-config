// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended', 'plugin:@typescript-eslint/recommended', '@norathefurry/base'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    // @typescript-eslint/eslint-plugin
    '@typescript-eslint',
    // eslint-plugin-prefer-arrow
    'prefer-arrow'
  ],
  'rules': {
    // typescript
    '@typescript-eslint/ban-ts-comment': [0],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/no-var-requires': [0],
    // functions
    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        'disallowPrototype': true,
        'singleReturnOnly': false,
        'classPropertiesAllowed': false
      }
    ],
  },
};
