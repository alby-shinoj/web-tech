const fs = require('fs')
console.log('start')
fs.readFile('trial.txt', function(err, d){
    if(err) throw err;
    console.log(d.toString());
})
console.log('end')