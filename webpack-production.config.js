const webpack = require('webpack');
const path = require('path');

const PATHS = {
  js: path.join(__dirname, 'web/js'),
  build: path.join(__dirname, 'dist'),
  assets: path.join(__dirname, 'assets'),
  style: path.join(__dirname, 'src', 'modules', 'legacy', 'css', 'main.less')
};

const config = {
  entry: './web/js/app',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: PATHS.js,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  /*plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]*/
};

module.exports = config;
