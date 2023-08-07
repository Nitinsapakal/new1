const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const routes= require("./router/routers")

app.use(bodyparser.urlencoded({extended:false}))

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use("/",routes);

app.listen(5555,function(){

          console.log("Server start on port no 5555")

})
module.exports=app;