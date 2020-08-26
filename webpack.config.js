const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  // devtool: 'inline-source-map',
  // devtool: 'eval-inline-source-map',
  // devtool: 'eval-cheap-source-map',

  // devtool: 'eval-cheap-module-source-map',
  mode: 'development',
  // mode: 'production',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  // watch: true,
  watchOptions: {
    ignored: ['node_modules/**', './.bin/**'],
  },
});
