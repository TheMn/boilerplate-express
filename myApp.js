let express = require("express");
let app = express();

let absolutePath = __dirname + "/views/index.html";

// function say_hello(req, res) {
//   res.send("Hello Express");
// }

app.get("/", res.sendFile(absolutePath));

console.log("Hello World");

module.exports = app;
