/* eslint-disable no-console */
const express = require("express");
const helmet = require("helmet");
const http = require("http");
const path = require("path");

const publicAssetsPath = path.join(__dirname, "../../", "/public/");

const server = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  const webpack = require("webpack");
  const config = require("../../webpack/webpack.dev.js");
  const compiler = webpack(config);

  server.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath,
      reload: true
    })
  );
  server.use(require("webpack-hot-middleware")(compiler));
}

const port = process.env.PORT || 8080;

server.use(helmet(), express.static(publicAssetsPath));

server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

http.createServer(server).listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
