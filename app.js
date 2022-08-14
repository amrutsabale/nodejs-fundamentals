// traditional way

// core modules (e.g http,https,fs,path,os)
const http = require("http");
const reqHandler = require("./routes.js");

const server = http.createServer(reqHandler);

server.listen(3000);
