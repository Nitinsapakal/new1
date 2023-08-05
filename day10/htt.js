const server = require("http");

var ht=server.createServer(function(req,resp){
       resp.writeHeader(200,{"content-type":"text/html"})   
      resp.write("<h1>Hello World</h1>")
      resp.end("<h4>End mesg</h4>")
})
ht.listen(30000,console.log("sdfsaf"))