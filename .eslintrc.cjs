module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['expo', 'eslint:recommended'],
  plugins: ['unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
