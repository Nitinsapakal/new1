const fs = require("fs");
fs.writeFile("abc.txt","welcome in the era of tech",function(err,data){

          if(err){ 
                    console.log("error")
          }else
          {
           console.log("file written successfully")
           fs.readFile("abc.txt",function(err,data){
              
                    if(err){
                              console.log("error")
                    }else{
                              console.log("data : "+data.toString())
                    }
           })

          }
})

fs.writeFileSync("file1","Welcome in the Nodejs programming </>")
     var data = fs.readFileSync("file1");
           console.log(data.toString());