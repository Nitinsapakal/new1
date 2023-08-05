const fs = require("fs");
let a=fs.createReadStream("aa.txt");

let b = fs.createWriteStream("bb.txt");

a.pipe(b);

let da = fs.readFileSync("bb.txt");
console.log(da.toString())


