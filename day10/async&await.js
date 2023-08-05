 function f2(){
         console.log("in f2 function")
         
        
 }     

async function f5(f2){

          await delay();
          
          console.log("in f5 function")
          
          f2();
}

function delay(time) {
          return new Promise(resolve => setTimeout(resolve, time));
        } 

function f1(){

          console.log("in f1 function")  
  }


  f5(f2);
  f1();
  //f2();
 
  
  