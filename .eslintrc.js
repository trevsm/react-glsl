module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'overrides': [],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': ['react', '@typescript-eslint'],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
  },
  'ignorePatterns': ['node_modules', 'dist', '.eslintrc.js', '.tsconfig.json'],
};
