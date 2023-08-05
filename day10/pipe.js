const fs = require("fs");

let a = fs.createReadStream("sample.txt");
let b = fs.createWriteStream("xyx.txt");

a.pipe(b);

fs.readFile("xyx.txt",function(err,da){

          console.log(da.toString())
      if(err){
          console.log("err"+err)
    
      }


      

});
