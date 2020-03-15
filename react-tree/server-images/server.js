const express = require("express");

const server = express();

server.use("/images", express.static("images"));


server.listen(1234);
