const webpack = require("webpack");
const merge = require("webpack-merge");
const paths = require("./utils/paths");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        include: paths.APP_DIR,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
});
