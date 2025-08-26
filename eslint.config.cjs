const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['dist/**'] },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        chrome: 'readonly',
      },
    },
    rules: {
      // Add project-specific rules here as needed
    },
  },
];


