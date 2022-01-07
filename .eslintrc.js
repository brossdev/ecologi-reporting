module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'error',
  },
};
