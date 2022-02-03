const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen("3000");

app.get("/", (req, res) => {
  let data = [];
  for (let i = 1; i <= 99999; i++) {
    data[i] = i;
  }
  res.render("index", data);
});
