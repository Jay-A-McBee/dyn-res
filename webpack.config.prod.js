const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



//Plugins
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
 template: __dirname + '/App/index.html',
 filename: 'index.html',
 inject: 'body'
})

const nodeEnv = new webpack.DefinePlugin({
  "process.env": {
    "NODE_ENV": JSON.stringify("production")
  }
})

const minify = new MinifyPlugin();
const analyze = new BundleAnalyzerPlugin();

const BUILD_DIR = path.resolve(__dirname, 'App/dist');
const APP_DIR = path.resolve(__dirname, 'App');

module.exports = {
  mode: 'production',
  entry: APP_DIR + '/root.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: ["@babel/plugin-proposal-object-rest-spread"]
      }
    },{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },{
       // images
      test: /\.(ico|jpe?g|png|gif)$/,
      loader: "file-loader"
   }]
 },
  plugins: [
    HtmlWebpackPluginConfig,
    nodeEnv,
    minify,
    analyze
 ]
}
