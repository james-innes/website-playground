const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");
var serveIndex = require("serve-index");
const server = express();
const __public = "../../public";

server.use(
  "/graphql",
  jsonGraphqlExpress.default(require(__public + "/db.js"))
);

server.use("/public", express.static("../../public"));

server.use(
  "/public",
  express.static(__public),
  serveIndex(__public, {
    icons: true,
    view: "details"
  })
);

const PORT = 4000;
server.listen(PORT, () =>
  console.log(`📡  Server ready at http://localhost:${PORT}`)
);
