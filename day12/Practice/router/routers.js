const express = require("express");
const connection = require("../db/dbconnect");
const router = express.Router();


// find all employees 

router.get("/employees",function(req,resp){

          connection.query("select * from employee",(err,data,fields)=>{
                
                    if(err){
                          
                              resp.status(500).send("no data found "+JSON.stringify(err));

                    }else{ 
                              console.log(data);
                              resp.render("index",{empdata:data});

                    }

          })
})

// router.get("/addemployee",function(req,resp){
//          resp.render("addemployee")
// })

module.exports=router;