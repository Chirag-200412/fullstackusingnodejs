const express = require("express");

const mdb = require("./modules/db");

const app = express();

// Initialize DB
mdb();

app.get("/", (req, res) => {
  res.send("Hi from backend");
});

app.listen(3000);
