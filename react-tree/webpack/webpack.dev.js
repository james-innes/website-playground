const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const paths = require("./utils/paths");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: "development",
  entry: ["react-hot-loader/patch", "webpack-hot-middleware/client"],
  devtool: "inline-source-map",
  optimization: {
    noEmitOnErrors: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        include: paths.APP_DIR,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["react-hot-loader/babel"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${paths.APP_DIR}/index.html`,
      filename: "./index.html"
    }),
    new Dotenv({
      systemvars: true
    })
  ]
});
