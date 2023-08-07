const mysql = require("mysql");

//create connection

var mysqlconnection=mysql.createConnection({
     
          host:'127.0.0.1',
          user:'root',
          password:'root123',
          database:'test',
          port:3306

});

mysqlconnection.connect((err)=>{
          
          if(err){
 
                     console.log("error in connection "+JSON.stringify(err));

          }else{
                    console.log("Conncetion done sucsessfully");
          }
})

module.exports=mysqlconnection;