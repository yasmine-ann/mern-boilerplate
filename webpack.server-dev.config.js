const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
    target: "node",
  entry: {
    server: "./src/server/server.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
      new CleanWebpackPlugin()
    ],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

};