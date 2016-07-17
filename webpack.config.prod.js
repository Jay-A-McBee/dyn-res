var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/App/index.html',
  filename: 'index.html',
  inject: 'body'
})

var BUILD_DIR = path.resolve(__dirname, 'App/dist');
var APP_DIR = path.resolve(__dirname, 'App');

module.exports = {
  entry: APP_DIR + '/root.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
	module : {
	loaders : [
	  {
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-2'],
        plugins: ["transform-object-rest-spread"]
      }
    },
    { 
    test: /\.css$/, 
    loader: "style-loader!css-loader" 
    },
    {
        // images
    test: /\.(ico|jpe?g|png|gif)$/,
    loader: "file"
    }]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })]
}

