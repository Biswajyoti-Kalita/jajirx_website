const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
const app = express();

app.use(bodyParser.json());
require("dotenv").config();

const port = process.env.PORT || 8880;

app.use(express.static(path.join(__dirname, "public")));

process.on("uncaughtException", (err, origin) => {
  console.log(err, origin);
});

// app.get("*", (req, res) => {
//   return res.render("error404", {});
// });

const server = http.createServer(app).listen(port);
server.on("listening", () => {
  console.log("server listening at port ", port);
});
