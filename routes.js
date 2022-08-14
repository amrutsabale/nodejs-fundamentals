const fs = require("fs");

const requestHandler = (req, res) => {
  console.log("req", req.url, req.method);

  const url = req.url;
  const method = req.method;

  switch (url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.write(
        `<html>
          <head>home form</head>
          <body>
          <form method='POST' action='/message'>
          <input type='text' name='message'></input>
          </form>
          </body>
          </html>`
      );
      break;
    case "/message":
      if (method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });
        req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split("=")[1];

          //  synchronous
          //   fs.writeFileSync("message.txt", message);
          //   res.statusCode = 302;
          //   res.setHeader("Location", "/");

          //   asynchronous
          fs.writeFile("message.txt", message, (err) => {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
          });
        });
      }
      break;
    case "/test":
      res.setHeader("Content-Type", "text/html");
      res.write("<html><head>test url</head></html>");
      break;
    case "/data":
      res.setHeader("Content-Type", "application/json");
      res.write(`{ name: "Jack", company: "Google" }`);
  }
  res.end();
};

module.exports = requestHandler;
