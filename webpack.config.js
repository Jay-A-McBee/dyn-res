const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
 template: __dirname + '/app/index.html',
 filename: 'index.html',
 inject: 'body'
});

const nodeEnvPluginConfig = new webpack.DefinePlugin({
 "process.env": {
    "NODE_ENV": JSON.stringify("developement")
  }
});

const BUILD_DIR = path.resolve(__dirname, 'App/dist');
const APP_DIR = path.resolve(__dirname, 'App');

const config = {
 entry: APP_DIR + '/root.js',
 mode: 'development',
 output: {
   path: BUILD_DIR,
   filename: 'bundle.js'
 },
    module : {
    rules : [
   {
     test: /\.js?$/,
     loader: 'babel-loader',
     exclude: /node_modules/,
     query: {
       presets: ["@babel/preset-env", "@babel/preset-react"]
     }
   },
   {
   test: /\.css$/,
   loader: "style-loader!css-loader"
   },
   {
       // images
   test: /\.(ico|jpe?g|png|gif)$/,
   loader: "file-loader"
   }]
 },
  plugins: [
    HtmlWebpackPluginConfig,
    nodeEnvPluginConfig
  ]
}

module.exports = config;