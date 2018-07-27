/* eslint-disable no-unused-vars */
var path = require('path')
var nodeExternals = require('webpack-node-externals')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    'handler': './handler.js'
  },
  target: 'node',
  // devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  externals: [nodeExternals()]/*,
    plugins: [new UglifyJsPlugin({
        mangle: {
            except: ['$super', '$', 'exports', 'require']
        },
        compress: false,
        beautify: false
    })] */
}
