const express = require("express");

const app = express();

require("dotenv").config();

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
  if (req.query.canSkip == "true") return next();
  console.log("🚀 ~ customMiddleWare1 ~ req: functions");
  next();
};

const customMiddleWare2 = (req, res, next) => {
  console.log("🚀 ~ customMiddleWare2 ~ req: functions");
  next();
};

app.use(customMiddleWare);
app.use(customMiddleWare1);
app.use(customMiddleWare2);

app.get(
  "/test",
  (req, res, next) => {
    // if (req.query.roll == "admin") {
    //   next("/route");
    // }

    if (req.query.roll === "admin") {
      return next("route");
    }
    next();
  },
  (req, res) => {
    res.send("🚀 ~ user: Hi User");
  },
);

app.get("/test", (req, res, next) => {
  res.send("🚀 ~ user: Hi Admin");
});

const m1 = (req, res, next) => {
  console.log("🚀 ~ m1");
  next();
};

const m2 = (req, res, next) => {
  console.log("🚀 ~ m2");
  next();
};

app.get("/multiMiddleWare", [m1, m2], (req, res, next) => {
  res.send("Sample Multi MiddleWare");
});

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
  console.log(`Server running at ${port}`);
});
