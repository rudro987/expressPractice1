import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
    },
    ignores: ['**/node_modules/', '*.dist/'],
  },
  js.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
