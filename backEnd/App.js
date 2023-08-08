const express = require("express");
const app = express();
const routes = require("./routers/routerss");

app.use(express.json());

app.use("/", routes);

const port = 8500;

app.listen(port, function () {
  console.log("Server is running on port " + port);
});

module.exports = app;