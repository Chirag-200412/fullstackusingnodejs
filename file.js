// console.log("Start JS");
// for (let i = 0; i <= 5e9; i++) {}
// console.log("Third");

// Blocking Code
// console.log("Code");
// for (let i = 0; i <= 10e8; i++) {}
// console.log("Vita");
// console.log("done");

// Unblocking Code
// console.log("Power");
// setTimeout(() => {
//   console.log("Toys");
// }, 2000);
// console.log("On");

// console.log(1 + +"1");

// const arr = [1,2,3,4];

// import multi, { add } from "./functions/function.js";
// import { global_var } from "./functions/function.js";

// const output = add(2, 4);
// console.log(output);

// console.log(global_var);

// const mul = multi(2, 4);
// console.log(mul);

// export const val = "1234";

// import readFile from "./fileSystem";
// const read = readFile();
// console.log(read);

// import fs from "fs";
// import path from "path";

// const filePath = path.join("functions", "sample.js");
// console.log("🚀 ~ filePath:", filePath);
// const absolutePath = path.resolve("/Node JS 6th Sem");
// console.log("🚀 ~ absolutePath:", absolutePath);

// const fileDirectory = path.dirname("functions/function.js");
// console.log("🚀 ~ fileDirectory:", fileDirectory);

// const fileExtention = path.extname("file.js");
// console.log("🚀 ~ fileExtention:", fileExtention);

// fs.readFile(filePath, "utf8", (err, content) => {
//   console.log("🚀 ~ content:", content);
// });

// import os from "os";

// console.log("🚀 ~ Platform:", os.platform());
// console.log("🚀 ~ arch:", os.arch());
// console.log("🚀 ~ Memory:", os.freemem());
// console.log("🚀 ~ cpu:", os.cpus());

// const freeMemoryInGb = os.freemem() / 1024 / 1024 / 1024;
// console.log("🚀 ~ freeMemoryInGb:", freeMemoryInGb);

// const { add } = require("./utils");
// const { multi } = require("./utils");
// console.log("🚀 ~ add:", add(1, 2));
// console.log("🚀 ~ multi:", multi(5, 6));

// const value = require("./counter");
// const funInPage2 = require("./newFile");

// Empty Stack

// console.log(`🚀 ~ "1":`, "1");

// console.log(`🚀 ~ "2":`, "2");

// console.log(`🚀 ~ "3":`, "3");

// const a = () => {
//   b();
//   console.log("🚀 ~ a ~ a:", a);
// };

// const b = () => {
//   console.log("🚀 ~ b ~ b:", b);
// };

// a();

// Empty Stack
// a is pushed
// b is pushed
// b is executed
// b is popped
// a is executed
// a is popped

// const a = () => {
//   b();
//   console.log("🚀 ~ a ~ a:");
//   Promise.resolve().then(() => {
//     console.log("🚀 ~ a ~ 2nd Promise Portion");
//   });
// };

// const b = () => {
//   console.log("🚀 ~ b ~ init:");
//   setTimeout(() => {
//     console.log("🚀 ~ b ~ b process:");
//   }, 0);

//   Promise.resolve().then(() => {
//     console.log("🚀 ~ b ~ Promise Portion");
//   });
//   console.log("🚀 ~ b ~ ended");
// };
// a();

// console.log("🚀 ~ ended");

// Empty Stack

// a is pushed
// b is pushed
// b is executed
// Registering callback
// b is popped
// a is executed
// a is popped
// last line is pushed
// last line is executed
// last line is popped
// [first, second, promise]     here promise has highest priority

// This function overloaded the call stack by calling function again and again in infinite loop
// const crash = () => {
//   crash();
// };
// crash();

// const fetchData = (callBack) => {
//   callBack("Data fetched", () => {
//     () => {
//       () => {
//         () => {};
//       };
//     };
//   });
//   //   callBack("Data fetched");
// };
// // fetchData((data) => console.log(data));
// // or
// const add = (data) => console.log(data);
// fetchData(add);

// const login = async () => {
//   await authorization();
//   await passwordCheck();
// };

// const fetchData = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     resolve("Data Fetched");
//     console.log("🚀 ~ Fetched:", "Data Fetched");
//   } else {
//     console.log("🚀 ~ Data Not Fetched:");
//     reject("Data Not Found");
//   }
// });

// fetchData.catch((error) => {
//   console.log("🚀 ~ error:", error);
// });

// const login = () => {
//   return Promise.resolve("Login Success");
// };

// const getUser = () => {
//   return Promise.resolve("User Found");
// };

// const getUserName = () => {
//   return Promise.resolve("User Name Found");
// };

// login().then((err, response) => {
//   if (err) {
//     console.log("🚀 ~ err:", err);
//   }
//   getUser().then(() => {
//     getUserName().then(() => {
//       console.log;
//     });
//   });
// });

// or

// login()
//   .then(getUser)
//   .then(getUserName)
//   .then(console.log("All Operations Done"))
//   .catch((err) => console.log(err));

// // (() => ()) not need to return
// // (() => {}) need to return the value
// Promise.resolve(10)
//   .then((x) => x + 10)
//   .then((x) => {
//     return x + 20;
//   })
//   .then(console.log);

const sample = async () => {
  console.log(`🚀 ~ sample ~ "Started":`, "Started");
  await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  console.log(`🚀 ~ sample ~ "Ended":`, "Ended");
};
console.log(`🚀 ~ sample ~ "Started":`, "Started ------ 1");
sample();
console.log(`🚀 ~ sample ~ "Started":`, "Started ------ 2");
