const pkg = require("../package.json");
const paths = require("./utils/paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [`${paths.APP_DIR}/index.jsx`],
  output: {
    path: paths.PUBLIC_DIR,
    publicPath: "/",
    filename: `${pkg.name}.min.js`
  },
  resolve: {
    alias: { "react-dom": "@hot-loader/react-dom" },
    extensions: [".jsx", ".js", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]",
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${pkg.name}.min.css`
    }),
    new CopyWebpackPlugin([
      {
        from: paths.ASSETS_DIR,
        to: paths.PUBLIC_DIR
      }
    ])
  ],
  externals: {
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true
  }
};
