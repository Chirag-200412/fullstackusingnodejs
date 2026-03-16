const express = require("express");

const app = express();

require("dotenv").config({
  path: ".env.production",
});

const port = process.env.port;
console.log("🚀 ~ port:", port);
const jwtToken = process.env.jwtToken;
console.log("🚀 ~ jwtToken:", jwtToken);

const lab = process.env.lab;
console.log("🚀 ~ lab:", lab);
app.use(express.json());

const customMiddleWare = (req, res, next) => {
  console.log("🚀 ~ customMiddleWare ~ req: functions");
  next();
};

const customMiddleWare1 = (req, res, next) => {
  console.log("🚀 ~ customMiddleWare ~ req: functions");
  next();
};

app.use(customMiddleWare);
app.use(customMiddleWare1);

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

app.listen(port, () => {
  console.log("Server running at 3000");
});
