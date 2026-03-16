const users = require("../modules/userModules");
exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUsersById = (req, res) => {
  const userId = req.params.id;
  const headers = req.headers;
  console.log("🚀 ~ headers:", headers);
  users.forEach((item) => {
    if (item.id == userId) {
      res.json(item);
      return;
    }
  });
};

exports.addUsers = (req, res) => {
  const students = req.body;
  console.log("🚀 ~ students:", students);
  res.json({
    message: "Student added",
    students,
  });
};
