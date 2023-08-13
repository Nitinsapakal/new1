const express = require("express");
const app = express();
const router = require("./Routers/Router");
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const port = 9090;

app.listen(port, function () {
  console.log("your server run on port no" + port);
});

module.exports=app;
