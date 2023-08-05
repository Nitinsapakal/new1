const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}))

app.use(function(req,resp,next){

          resp.send("<h1> 1st midleware function</h1>")
          next();
})
app.use(function(req,resp,next){
          resp.send("<p> 2nd midleware function</p>")
next();
})
app.get( "/home",function(req,resp){
          resp.send("<h1> Welcome to home page </h1>")
})
app.get( "/about",function(req,resp){   
          resp.send("<h1> Welcome to about page </h1>")   
})

app.listen(55000,function(){
          console.log("server start on port no 55000")
})
