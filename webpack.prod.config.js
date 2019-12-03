const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: "production",
  target: "web",
  entry: {
    main: "./src/index.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      {
          test: /\.(scss|css)$/,
          use: [
              {
                  loader: MiniCssExtractPlugin.loader
              },
              'css-loader',
              'postcss-loader',
              'sass-loader'
          ]
      },
      {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
              loader: 'url-loader',
              options: {
                  limit: 8000,
                  fallback: require.resolve('responsive-loader'),
                  quality: 65,
                  sizes: [300, 600]
              }
          }
      }
    ]
  },
  optimization: {
      minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: './assets/css/[name].css',
        chunkFilename: './assets/css/[id].css'
      }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      excludeChunks: ["server"]
    })
  ]
}