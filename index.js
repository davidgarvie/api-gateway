const express = require("express");

const app = express();

const PORT = 8080;

app.use("/ping", (req, res) => res.send("pong"));

app.listen(PORT, () => {
  console.info(`Listening on ${PORT}`);
});
