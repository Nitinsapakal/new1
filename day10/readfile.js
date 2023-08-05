const fs=require("fs");
fs.readFile("sample.txt",function(err,data){

          if(err){
                    console.log(" err "+err);
          }else{
                    console.log("data "+data.toString());
          }

})
fs.readFile("htmlsample.html",function(err,data){

          if(err){
                    console.log("err "+err)
          }else{
                    console.log(" data : "+data)
          }

})

console.log("___________________________________")
var d = fs.readFileSync("sample2.txt")

console.log(d.toString());
console.log("___________________________________")

var a=fs.readFileSync("htmlsample.html")
console.log("Sync data "+a.toString())