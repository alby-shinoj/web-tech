const fs = require('fs');
console.log("start")
const d = fs.readFileSync('trial.txt');
console.log(d.toString());
console.log("end")