import fs from "fs";

const readFile = () => {
  console.log("started:");

  fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
      console.log("🚀 ~ readFile ~ err:", err);
    } else {
      console.log("🚀 ~ readFile ~ data:", data);
    }
  });

  fs.writeFile("file.txt", "New", "utf8", (err) => {
    if (err) throw err;
    else {
      console.log("🚀 File Written:");
    }
  });

  // fs.appendFile("file.txt", "\nText");
  // fs.readFile("file.txt", "utf8", (err, data) => {
  //   if (err) {
  //     console.log("🚀 ~ readFile ~ err:", err);
  //   } else {
  //     console.log("🚀 ~ readFile ~ data:", data);
  //   }
  // });

  //   const fileContent = fs.readFileSync("file.txt", "utf8");
  //   console.log("Initial: ", fileContent);

  //   fs.writeFileSync("file.txt", "New Content");
  //   const newfileContent = fs.readFileSync("file.txt", "utf8");
  //   console.log("Written Content: ", newfileContent);

  //   fs.appendFileSync("file.txt", "\nNew Line");
  //   const newappendfileContent = fs.readFileSync("file.txt", "utf8");
  //   console.log("append Content: ", newappendfileContent);

  console.log("ended:");
};

readFile();
