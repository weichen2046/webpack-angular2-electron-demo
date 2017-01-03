var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'source-map',

  entry: {
    'angular2': [
      'rxjs',
      '@angular/core'
    ],
    'app': './src/main'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
	loaders: ['awesome-typescript-loader?configFileName=./src/tsconfig.json', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
	loader: 'html-loader'
      },
      {
        test: /\.css$/,
	include: __dirname + '/src/app/',
	loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({name: 'angular2', filename: 'angular2.js', minChunks: Infinity}),
    new CommonsChunkPlugin({name: 'common', filename: 'common.js'}),
    new HtmlWebpackPlugin({template: 'src/index.html', chunksSortMode: 'dependency'}),
  ],

  target: 'electron-renderer'

}
