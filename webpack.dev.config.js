const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  target: "web",
  entry: {
    main: ["webpack-hot-middleware/client", "./src/index.js"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "babel-loader",
                options: {
                presets: ["@babel/preset-env"]
                }
            },
            'eslint-loader'
        ]
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
              'style-loader',
              'css-loader',
              'sass-loader'
          ]
      },
      {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
              loader: 'file-loader'
          }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      excludeChunks: ["server"]
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
};