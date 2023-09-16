let express = require("express");
let app = express();

function serve_file(req, res) {
  let INDEX_FILE_PATH = __dirname + "/views/index.html";
  res.sendFile(INDEX_FILE_PATH);
}

let ASSETS_FOLDER_PATH = __dirname + "/public";
let STYLE_FILE_PATH = ASSETS_FOLDER_PATH + "/style.css";
app.use(ASSETS_FOLDER_PATH, express.static(STYLE_FILE_PATH));

app.get("/", serve_file);

console.log("DONE!");

module.exports = app;
