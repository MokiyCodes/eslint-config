// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended', 'plugin:@typescript-eslint/recommended'
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
    // indent, quotes and semi (base config)
    'indent': [
      2, 2
    ],
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': false,
        'allowTemplateLiterals': true
      },
    ],
    'jsx-quotes': [
      2, 'prefer-single'
    ],
    'semi': [
      2, 'always'
    ],
    // compress the brackets
    'curly': [
      2, 'multi'
    ],
    // complexity
    'complexity': [
      1, 15
    ],
    'max-depth': [
      2, 5
    ],
    'max-lines-per-function': [
      2,
      {
        'max': 500,
        'skipBlankLines': true,
        'skipComments': true,
      },
    ],
    'max-statements': [
      2, 100, { 'ignoreTopLevelFunctions': true, }
    ],
    // weird shit
    'strict': [
      2, 'global'
    ],
    'no-extra-parens': [
      2, 'all'
    ],
    'no-async-promise-executor': [0],
    'no-empty': [
      2,
      { 'allowEmptyCatch': true, },
    ],
    'default-case-last': [2],
    'default-param-last': [2],
    'no-var': [2],
    'max-classes-per-file': [
      2, 5
    ],
    'no-eval': [2],
    'one-var': [1],
    'quote-props': [
      1, 'always'
    ],
    'prefer-template': [2],
    'require-unicode-regexp': [1],
    'yoda': [
      2, 'never'
    ],
    'new-parens': [
      2, 'never'
    ],
    // .xyz instead of ['xyz']
    'dot-notation': [
      2, {
        'allowKeywords': false,
        'allowPattern': '^[a-z]+(_[a-z]+)+$'
      }
    ],
    // ===|!== instead of ==|!=
    'eqeqeq': [
      2, 'always', { 'null': 'ignore' }
    ],
    // newline stuff
    'linebreak-style': [
      2, 'unix'
    ],
    'no-multiple-empty-lines': [
      2, {
        'max': 3, 'maxEOF': 1, 'maxBOF': 0
      }
    ],
    'newline-per-chained-call': [2],
    'nonblock-statement-body-position': [
      2, 'below'
    ],
    'object-curly-newline': [
      2,
      {
        'multiline': true,
        'minProperties': 2,
      }
      // {
      //   'ObjectExpression': 'always',
      //   'ObjectPattern': 'always',
      //   'ImportDeclaration': 'never',
      //   'ExportDeclaration': 'always',
      // },
    ],
    'array-element-newline': [
      2, 'consistent'
    ],
    'eol-last': [
      2, 'always'
    ],
    // typescript
    '@typescript-eslint/ban-ts-comment': [0],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/no-var-requires': [0],
    // bad code
    'no-self-compare': [2],
    // variable names
    'camelcase': [
      1,
      {
        'properties': 'always',
        'ignoreImports': true,
        'ignoreGlobals': true,
      },
    ],
    // functions
    'arrow-body-style': [
      2, 'as-needed'
    ],
    'no-confusing-arrow': [
      2, { 'allowParens': true }
    ],
    'prefer-arrow-callback': [2],
    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        'disallowPrototype': true,
        'singleReturnOnly': false,
        'classPropertiesAllowed': false
      }
    ],
    // spacing
    'no-trailing-spaces': [2],
    'no-whitespace-before-property': [2],
    'spaced-comment': [
      2,
      'always',
      {
        'exceptions': [
          '-', '+', '/'
        ],
      },
    ],
    'comma-spacing': [
      2,
      {
        'before': false,
        'after': true,
      },
    ],
    'object-curly-spacing': [
      2,
      'always',
      { 'objectsInObjects': true, },
    ],
    'array-bracket-newline': [
      1, { 'minItems': 2 }
    ],
    'array-bracket-spacing': [
      2,
      'never',
      {
        'singleValue': false,
        'objectsInArrays': false,
        'arraysInArrays': true,
      },
    ],
    'space-in-parens': [
      2, 'never'
    ],
    'computed-property-spacing': [
      2, 'never'
    ],
    'keyword-spacing': [
      2,
      {
        'before': true,
        'after': true,
      },
    ],
    'space-infix-ops': [2],
    'key-spacing': [
      2,
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'strict',
      },
    ],
  },
};
