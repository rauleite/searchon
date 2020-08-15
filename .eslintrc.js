module.exports = {
  env: {
    browser: false,
    es2020: true,
  },
  extends: ['airbnb/base'],
  // parser: 'babel-eslint',

  parserOptions: {
    // ecmaFeatures: {
    //   jsx: true,
    // },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  // plugins: ['react', 'react-hooks'],
  rules: {
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'consistent-return': 0,
    'no-unused-vars': 1,
  },
  globals: {
    // fabric: true,
  },
};
