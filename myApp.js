let express = require("express");
let app = express();

let absolutePath = __dirname + "/views/index.html";

function serve_file(req, res) {
  res.sendFile(absolutePath);
}

app.get("/", serve_file);

console.log("Hello World");

module.exports = app;
