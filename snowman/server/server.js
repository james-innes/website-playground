const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");

const PORT = 3000;
const server = express();
const data = require("../data/db.js")
server.use('/graphql', jsonGraphqlExpress.default(data));
server.listen(PORT);