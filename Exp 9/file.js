const fs = require('fs');
fs.open('new.txt', 'w', function(err){
    if(err) throw err;
    console.log('File created');
})

fs.writeFile('new.txt', 'Hello\nWorld', function(err){
    if(err) throw err;
    console.log('File Writing Completed');
})

fs.appendFile('new.txt', '\nNew Data', function(err){
    if(err) throw err;
    console.log('File Appended');
})

fs.rename('new.txt', 'test.txt', function(err){
    if(err) throw err;
    console.log('File renamed');
})

fs.unlink('test.txt', function(err){
    if(err) throw err;
    console.log('File deleted');
})