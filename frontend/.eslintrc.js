module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'airbnb',
    'airbnb-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'comma-dangle': ['error', 'never'],
    'import/extensions': 0,
    'import/order': ['error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        pathGroups: [
          { group: 'internal', pattern: './**', position: 'after' },
          { group: 'internal', pattern: '../**', position: 'after' },
          { group: 'internal', pattern: '@/**', position: 'after' }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'linebreak-style': 'off',
    'max-lines': ['error', 120],
    'no-console': ['warn', { allow: ['error'] }],
    'prefer-promise-reject-errors': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-curly-spacing': ['error', { attributes: false, children: true, when: 'always' }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 2 }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [2,
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        shorthandFirst: false,
        shorthandLast: true
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'sort-keys': ['error',
      'asc', {
        caseSensitive: true,
        minKeys: 2,
        natural: false
      }
    ]
  }
};
