const express = require("express");
// require("./utils");
const app = express();
const port = process.env.PORT || 8080;
const http = require("http");

app.listen(port, () => {
  console.log(`API listening on PORT ${port} `);
});

app.use("/*", express.static("./views"));

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/writer", (req, res) => {
  res.render("writer");
});

app.get("/reader", (req, res) => {
  res.render("reader");
});

// Export the Express API
module.exports = app;
