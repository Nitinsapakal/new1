const fs = require("fs");

var v = fs.readFileSync("sample.txt")
console.log("sync Method "+v.toString())

fs.readFile("sample2.txt",function(err,data){

          if(err){
                          console.log('err '+err)
          }else{
                           console.log("data "+data.toString())
          }

})