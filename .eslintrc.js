module.exports = {
  env: {
    es2021: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
  },
};
