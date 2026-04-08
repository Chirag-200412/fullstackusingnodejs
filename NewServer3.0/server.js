const express = require("express");
const app = express();

const connectDB = require("./models/db.js");
const User = require("./models/userModels.js");

const userRoutes = require("./routes/userRoutes");

// Connect DB
connectDB();

// getUser();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello I am here");
});

app.use("/users", userRoutes);

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
