const fs = require("fs");
fs.exists("sample.txt",function(flag){

          if(flag){
                 
                    console.log("file exists")
                    fs.stat("sample.txt",function(err,status){
                          
                              if(err){
                                           
                                        console.log("error")
                              }else{
                                        //console.log(" "+status)
                                        fs.open("sample.txt","r",function(err,fd){

                                                          var buff=Buffer.alloc(status.size)
                                                          fs.read(fd,buff,0,8,null,function(err,bytesRead,buffer){
                                                           

                                                            
                                                                      console.log(buffer.toString())
                                                            
                                                  
                                                  })
                                                  
                                        })
                                        
                              }
                    })
               
          }else{
                    console.log("error")
          }

})