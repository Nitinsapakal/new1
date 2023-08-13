const mysql = require("mysql")

const mysqlconnection = mysql.createConnection({
      host:"127.0.0.1",
      user: "root",
      password:"root123",
      database : 'test5',
      port:3306

})

mysqlconnection.connect((err)=>{

if(err){

          console.log("error "+JSON.stringify(err));

}else{
           console.log("db connection Successfull !!!!!!!!!!");
}

})

module.exports=mysqlconnection;