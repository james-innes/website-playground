const express = require("express");
var serveIndex = require("serve-index");
const server = express();

server.use(
  "/public",
  express.static("../public/"),
  serveIndex("../public/", { view: "details" })
);

server.listen(1234);

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
