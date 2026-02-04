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

import fs from "fs";
import path from "path";

const filePath = path.join("functions", "sample.js");
console.log("🚀 ~ filePath:", filePath);
const absolutePath = path.resolve("/Node JS 6th Sem");
console.log("🚀 ~ absolutePath:", absolutePath);

const fileDirectory = path.dirname("functions/function.js");
console.log("🚀 ~ fileDirectory:", fileDirectory);

const fileExtention = path.extname("file.js");
console.log("🚀 ~ fileExtention:", fileExtention);

fs.readFile(filePath, "utf8", (err, content) => {
  console.log("🚀 ~ content:", content);
});
