module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-redux/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  globals: {
    JSX: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'react-redux',
    '@typescript-eslint',
  ],
  rules: {
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'complexity': [
      'error',
      {
        'max': 10,
      },
    ],
    'default-case': 'error',
    'default-case-last': 'error',
    'dot-notation': 'error',
    'max-statements-per-line': 'error',
    'multiline-ternary': [
      'error',
      'always-multiline',
    ],
    'newline-per-chained-call': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': [
      'warn', {
        ignore: [
          -1,
          0,
          1,
          2,
        ],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    // IMPORT
    'import/extensions': 'off',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-default-export': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
        ],
      },
    ],
    'import/no-self-import': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // REACT
    'react/destructuring-assignment': [
      'warn',
      'always',
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.tsx',
          '.jsx',
        ],
      },
    ],
    'react/jsx-no-bind': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-wrap-multilines': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-multi-comp': 'warn',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/self-closing-comp': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    // REACT-HOOKS
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // TYPESCRIPT
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
