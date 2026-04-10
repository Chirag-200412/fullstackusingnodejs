const express = require("express");
const app = express();

const connectDB = require("./models/db.js");
const User = require("./models/userModels.js");

const userRoutes = require("./routes/userRoutes");

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello I am here");
});

app.use("/users", userRoutes);

app.use((req, res, next) => {
  if (req.url.startsWith("/gla/students")) {
    req.url = req.url.replace("/gla/students", "");
  }
  next();
});

app.get("/year/:year/section/:section", (req, res) => {
  const { year, section } = req.params;

  res.send(`/year/${year}/section/${section}`);
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000/");
});
