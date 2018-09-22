/* eslint-disable */
var express = require("express");
var app = express();
var request = require("request");
var async = require("async");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes/sumoner");

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);
//some other code

// app.use("/", routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serve up state assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.get("/ping", function(req, res) {
  return res.send("pong");
});

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// var http = require("http");

// http
//   .createServer(function(request, response) {
//     response.writeHead(200, {
//       "Content-Type": "text/plain",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
//     });
//     response.end("Hello World\n");
//   })
//   .listen(PORT);
