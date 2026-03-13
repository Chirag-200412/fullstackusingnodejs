const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Server Setup done");
// });

// app.get("/users", (req, res) => {
//   res.json({
//     id: 1,
//     name: "Sample Name",
//   });
// });

// app.get("/users/:id", (req, res) => {
//   const clientData = req.params.id;
//   res.json({
//     id: 1,
//     name: "Sample Name",
//     clientData,
//   });
// });

app.listen(3000, () => {
  console.log("Server running at 3000");
});
