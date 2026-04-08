const mongoose = require("mongoose");

const mdb = async() => {
  await mongoose
    .connect("mongodb://localhost:27017/secE")
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
}

module.exports = mdb;