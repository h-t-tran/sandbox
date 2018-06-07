// production config
const merge = require('webpack-merge');
const {resolve} = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',

  output: {
    filename: 'js/bundle.[hash].debug.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },

  /**
   * The following is to produce minified version and .map
   *
  output: {
      filename: 'js/bundle.[hash].min.js',
      path: resolve(__dirname, '../../dist'),
      publicPath: '/',
  },
  devtool: 'source-map',
   */

  plugins: [],
});
