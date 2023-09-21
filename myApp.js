let express = require("express");
let app = express();

let ASSETS_FOLDER_PATH = __dirname + "/public";
app.use("/public", express.static(ASSETS_FOLDER_PATH));

function serve_file(req, res) {
  let INDEX_FILE_PATH = __dirname + "/views/index.html";
  res.sendFile(INDEX_FILE_PATH);
}
app.get("/", serve_file);

function server_json(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
}
app.get("/json", server_json);

console.log("DONE!");

module.exports = app;
