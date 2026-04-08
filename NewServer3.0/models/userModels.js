const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number,
  course: String,
  skills: [String],
  address: {
    city: String,
    pincode: Number,
  },
  isActive: Boolean,
  status: String,
  graduated: Boolean,
  updatedAt: Date,
  marks: [
    {
      subject: String,
      Score: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
