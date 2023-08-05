// allocation buffer of size 400 bytes
var buf1=Buffer.alloc(400)
// write data to the buffer it returns number of characters
var l = buf1.write("hello world")
 console.log(" lenght :",l)
 
 console.log("console : "+buf1.toString())

 var v = new Buffer("Testing")
 console.log("console v :",v.length)
 console.log("buffer v.toString",v.toString())


 var buff = Buffer.alloc(800)
 var l = buff.write("welcome to node js")
 console.log("length : ",l)
 console.log("console : ",buff.toString())

 

 var buf1 = Buffer.alloc(500)
 var l = buf1.write("Welcome in the world of programming")
 console.log("lengeth ",l)
 console.log("buf1 is : "+buf1.toString())


 var buf2 = Buffer.alloc(5000)
buf2.write("welcome in new backend technology")
console.log(" buf2 "+buf2)

buf1.copy(buf2);
console.log("copy : "+buf2.toString())


