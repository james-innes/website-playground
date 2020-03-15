const express = require("express");
const path = require("path")
// var serveIndex = require("./index");
const server = express();

//const dirTree = require("directory-tree");
//const tree = dirTree("./posts");

var { Liquid } = require('liquidjs');
//var engine = new Liquid();
var engine = new Liquid();

// register liquid engine
server.engine('liquid', engine.express());
//server.set('views', './views');            // specify the views directory

server.set("views", path.join(__dirname, "views"));

server.set('view engine', 'liquid');       // set liquid to default
server.locals.siteName = "Vegetable World";

server.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

server.use(
  "/posts",
  res.render()
);

// server.use(
//   "/posts",
//   express.static("./posts/"),
//   serveIndex("./posts", { view: "details", "icons": true })
// );

server.listen(4321);

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
