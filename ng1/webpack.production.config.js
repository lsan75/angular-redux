var path = require('path')
var loaders = require('./webpack.loaders')
var plugins = require('./webpack.plugins')

var webpack = require('webpack')
plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  })
)
module.exports = {
  entry: "./index",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: loaders
  },
  plugins: plugins
};