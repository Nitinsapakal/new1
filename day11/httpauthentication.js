// import labraries
const http = require("http");
const fs = require("fs");
const p = require("./authenticate")
const url = require("url");

const server = http.createServer(function(req,resp){
 
      var q = url.parse(req.url,true);

        resp.writeHeader(200,{"content-type":"text/html"})

          switch(q.pathname){

            case "/login":
             var a = fs.createReadStream("loginform.html")

              a.pipe(resp); 
                    break;   
                    
                    
             case "/validateUser1":
               var na = q.query.uname;
               var pa = q.query.pass;
                   var ans= p.validateUser=(na,pa);
                   if(ans){
                    resp.write("<h2>Successful login</h2>");
                    resp.end("<p><a href='/register'>Click to register</a> <a href='/login'>Login</a></p>")
                   }else{
                    resp.write("<h2>Invalid login</h2>");
                    resp.end("<p><a href='/register'>Click to register</a> <a href='/login'>Login</a></p>")
                   }
                    break;



            case "/registerUser":
            var na = q.query.uname;
            var pa = q.query.pass;  
          var ans=  p.registerUser1(na,pa);
          if(ans){
            resp.write("<h2>Successful Registered</h2>");
            resp.end("<p><a href='/register'>Click to register</a> <a href='/login'>Login</a></p>")
          }else{
                    resp.write("<h2>Invalid Registered</h2>");
                    resp.end("<p><a href='/register'>Click to register</a> <a href='/login'>Login</a></p>")
          }
            break;


            case "/register":
             
            var p1 = fs.createReadStream("registration.html")

            p1.pipe(resp); 
           
                    break;

            default :
            resp.write("<h3>Please login of rgister first</h3>")
            resp.end("<p><a href='/register'>Click to register</a> <a href='/login'>Login</a></p>")
            break;        
          }

})
server.listen(5000,function(){
          console.log("server started on port 5000")
})