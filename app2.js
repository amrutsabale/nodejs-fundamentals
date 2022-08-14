const express = require("express");
const app = express();

// middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
  return res.send(`<html>
    <head>home form</head>
    <body>
    <form method='POST' action='/message'>
    <input type='text' name='message'></input>
    </form>
    </body>
    </html>`);
});

app.get("/data", (req, res) => {
  res.send({ name: "amrut" });
});

// listen on port
const port = 3000;
app.listen(port, () => {
  console.log("server is running on port", port);
});
