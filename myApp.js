let express = require("express");
let app = express();

let ASSETS_FOLDER_PATH = __dirname + "/public";
app.use("/public", express.static(ASSETS_FOLDER_PATH));

function serve_file(req, res) {
  let INDEX_FILE_PATH = __dirname + "/views/index.html";
  res.sendFile(INDEX_FILE_PATH);
}

app.get("/", serve_file);

console.log("DONE!");

module.exports = app;
