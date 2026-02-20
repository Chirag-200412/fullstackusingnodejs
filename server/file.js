const http = require("http");
const os = require("os");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const requestUrl = request.url;
  const requestMethod = request.method;

  // Check if log.txt is available if not create the writeFile
  // Keep on adding the request URL in the log file
  // fs.writeFile("log.txt", requestUrl);

  if (requestUrl === "/") {
    response.end("Home Page");
  }

  if (requestUrl === "/logs") {
    // read the log file and display its content
  }
  if (requestUrl === "/systemConfig") {
    const freeMemory = `free Ram: ${os.freemem() / 1024 / 1024 / 1024}`;
    response.end(freeMemory);
  }
});

server.listen(3000);
