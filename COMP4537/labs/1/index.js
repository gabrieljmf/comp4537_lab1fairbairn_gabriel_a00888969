// TODO: SSL certificates https://www.namecheap.com/support/knowledgebase/article.aspx/9705/33/installing-an-ssl-certificate-on-nodejs/

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "1")));
app.use("/js", express.static(__dirname + "/1/js"));
app.use(express.urlencoded({ extended: false }));
// Without middleware
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// app.get("/back", (req, res) => {
//   res.redirect("/");
// });

// app.get("/reader", (req, res) => {
//   res.sendFile(__dirname + "/reader.html");
// });

// app.get("/writer", (req, res) => {
//   res.sendFile(__dirname + "/writer.html");
// });

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
