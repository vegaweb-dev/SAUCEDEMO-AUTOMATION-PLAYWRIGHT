// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTS from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTS,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginTS.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },
];

