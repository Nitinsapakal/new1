
const https = require("http");
 
var server = https.createServer(function(req,resp){

          resp.weriteHeader(200,{"content-type":"text/html"})
         resp.write("<h1>this is another div</h1>")
          resp.end("<h1>This is end </h1>")
})
server.listen(28,console.log("server connected at port no 28"))
