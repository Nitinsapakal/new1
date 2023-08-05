userdata={"user1":"user123","user2":"user234","user3":"user345"}

exports.validateUser=(uname,pass)=>{
   var p = userdata[uname];
   return p===pass;

}

exports.registerUser1=(uname,pass)=>{
     
   var passwd = userdata[uname];
   if(passwd !== undefined){
          console.log(userdata)
        return false;
   }else{
          console.log(userdata)
          userdata[uname] = pass;
          return true;
   }

}