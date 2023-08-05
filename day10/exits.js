const fs = require("fs")
 fs.exists("sample.txt",function(flag){
     
          if(flag){
                    console.log("file exists");
                   
                    fs.stat("sample.txt",function(err,da){
                              console.log(da);
                              if(err){
                                        console.log("error :"+err);
                              }else
                              {
                                        console.log("size  : "+da.size);
                                    
                              }
                    })

          }else{
                    console.log("file does not exist");
          }

 }) 