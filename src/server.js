const express = require("express");

const app = express();

app.use("/ping", (req, res) => res.send("pong"));

module.exports = app;

