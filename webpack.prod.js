/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  // devtool: 'inline-source-map',
  // devtool: 'eval-inline-source-map',
  // devtool: 'eval-cheap-source-map',

  // devtool: 'eval-cheap-module-source-map',
  // mode: 'development',
  mode: 'production',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
  ],
});
