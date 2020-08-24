const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const compressionPlugin = require("compression-webpack-plugin");

//Plugins
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/src/index.html",
  filename: "index.html",
  inject: "body"
});

const nodeEnv = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});

const compress = new compressionPlugin({
  filename: "[path].gz[query]",
  algorithm: "gzip"
});

const minify = new MinifyPlugin();
const analyze = new BundleAnalyzerPlugin();

const BUILD_DIR = path.resolve(__dirname, "src/dist");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  mode: "production",
  entry: SRC_DIR + "/root.js",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, nodeEnv, minify, compress]
};
