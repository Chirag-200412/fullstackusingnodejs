const users = require("../modules/userModules");
exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUsersById = (req, res) => {
  const userId = req.params.id;
  users.forEach((item) => {
    if (item.id == userId) {
      res.json(item);
      return;
    }
  });
};
