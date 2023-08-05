const https=require("http");

var server = https.createServer(function(req,resp){

          resp.writeHeader(200,{"content-type":"text/html"})
          resp.write("")
          resp.end("<h1></h1>")

})
server.listen(5,console.log("server connected successfully at port no 5"))