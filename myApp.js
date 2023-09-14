let express = require("express");
let app = express();

function say_hello(req, res) {
  res.send("Hello Express");
}

app.get('/', say_hello);

console.log("Hello World");

module.exports = app;
