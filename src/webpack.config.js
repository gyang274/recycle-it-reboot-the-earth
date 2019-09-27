const path = require('path')
const webpack = require('webpack')
const webpackNodeExternals = require('webpack-node-externals')
// const htmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    server: './index.js',
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'server.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/api',
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in htmlWebPackPlugin in plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [
    webpackNodeExternals()
  ],
  plugins: [
    new webpack.IgnorePlugin(/^aws-sdk$/),
    new webpack.IgnorePlugin(/^pg-native$/),
    // new htmlWebPackPlugin({
    //   template: "./dist/index.html",
    //   filename: "./dist/index.html",
    //   excludeChunks: [ 'server' ]
    // })
  ],
};
