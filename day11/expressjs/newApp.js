const express = require("express");
const bodyparser= require("body-parser")
const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req,resp,next){

          resp.send("<h1>1 middleware</h1>")
          next();
})
app.use(function(req,resp,next){
          resp.send("<p>this is another string</p>")
          next()
})
app.get("/home",function(req,resp){

          resp.send("<h1>Inside home page</h1>")

})

app.listen(6000,function(){
        console.log("sever start on port no 6000 ")
})