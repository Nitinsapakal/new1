

exports.addition =(num1,num2)=>{
    
          return num1+num2;
 
}

exports.substraction = function(num1,num2){

          return num1-num2;
}

const factorial = function(num){
           f = 1

          for( var i = 1;i<=num;i++ ){
            f=f*i;
          }

          return f;
}