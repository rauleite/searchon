/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  // devtool: 'source-map',
  // devtool: 'cheap-inline-module-source-map',
  mode: 'production',
  optimization: {
    // should be included?
    // optimization: {
  //   usedExports: true,
  // },

    // minimize: true,
    // minimizer: [
    //   new TerserPlugin({
    //     test: /\.js(\?.*)?$/i,
    //     sourceMap: true,
    //     terserOptions: {
    //       ecma: 2020,

    //     },
    //   }),
    // ],
  },
});
