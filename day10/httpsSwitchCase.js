const https = require("http");
const url = require("url")

function processrequest(req,resp){
       
  var q = url.parse(req.url,true);
  console.log(q);
  resp.writeHeader(200,{"content-type":"text/html"})
  switch(q.pathname){


                 case "/home":
                    resp.write("<h1>Home Page</h1>");
                    resp.end();
                    break;

                    case "/aboutus":
                    resp.write("<h4>Contact us via url</h4>");
                    resp.end();
                    break;

                    case "/image":
                    resp.write("<h5>Temprary Image is not avilable in server in the form of Picture</h5>");
                    resp.end();
                    break;

  }

}
var server = https.createServer(processrequest)
server.listen(50,()=>{console.log("server connected port no 50")})
