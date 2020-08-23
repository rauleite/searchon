/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  // devtool: 'source-map',
  // devtool: 'cheap-inline-module-source-map',
  mode: 'production',
  // externals: {
  //   // child_process: 'child_process',
  //   // fs: 'fs',
  //   // readline: 'readline',
  // },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  optimization: {
    // should be included?
    // optimization: {
    // usedExports: true,
    // },
    // concatenateModules: false,

    minimize: true,
    minimizer: [
      // new ClosurePlugin({ mode: 'AGGRESSIVE_BUNDLE' }, {
      // }),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,

        // sourceMap: true,
        // exclude: /node_modules/,
        terserOptions: {
          ecma: 2020,

        },
      }),
    ],
  },
  plugins: [
  ],
});
