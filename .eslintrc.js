module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    "root": true,
    "env": {
      "node": true,
      "vue/setup-compiler-macros": true
    },
    "extends": [
      "eslint:recommended",
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      "@vue/typescript/recommended",
      "plugin:vue/vue3-recommended",
      "@vue/standard",
      "prettier",
    ],
    "plugins": ["prettier"],
    rules: {
      "prettier/prettier": "error",
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'vue/custom-event-name-casing': 'off',
      'no-use-before-define': 'off',
      // 'no-use-before-define': [
      //   'error',
      //   {
      //     functions: false,
      //     classes: true,
      //   },
      // ],
      '@typescript-eslint/no-use-before-define': 'off',
      // '@typescript-eslint/no-use-before-define': [
      //   'error',
      //   {
      //     functions: false,
      //     classes: true,
      //   },
      // ],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^h$',
          varsIgnorePattern: '^h$'
        }
      ],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^h$',
          varsIgnorePattern: '^h$'
        }
      ],
      'space-before-function-paren': 'off',
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never']
    }
  };
  