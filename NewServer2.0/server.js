const express = require("express");
const app = express();

app.set("view engine", "ejs");

const homePageContent = {
  header: { title: "GLA University" },
  footer: { createdBy: "GLA @2026" },
};

app.get("/", (req, res) => {
  res.render("home", {
    title: homePageContent.header.title,
    createdBy: homePageContent.footer.createdBy,
    content: "GLA",
    students: [
      { name: "Student 1", dept: "CSE" },
      { name: "Student 2", dept: "IT" },
    ],
  });
});

app.get("/header", (req, res) => {
  res.render("header", homePageContent.header);
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});

module.exports = app;
