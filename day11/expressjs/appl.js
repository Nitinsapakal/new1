const express = require("express");
const app = express();
const bodyparser =require("body-parser");

app.use(bodyparser.urlencoded({extended:false}))

app.use(function(req,resp,next){

console.log("inside 1 middleware");
next();
})


app.use(function(req,resp,next){

          console.log("inside 2 middleware")
          next();
})

app.get("/home",function(req,resp){

          resp.send("<h1>Hello world</h1>")

})

app.get("/aboutus",function(req,resp){

          resp.send("<h4>in about us page</h4>")

})

app.listen(5000,function(){
          console.log("server start on port number 5000")
})