// this is the general format of the node JS questions

var http = require('http');
const fs = require('fs');
const { URLSearchParams } = require('url');

const server = http.createServer(function (req, res) {      // req- request, res - response
    console.log("Connection Established");

    // this block reads the file specified; here an html file is read and displayed
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream('trial3.html').pipe(res);
    } 
    
    // this defines what to do with the data, whether to store it or print it
    else if (req.url === '/signup' && req.method == 'POST') {
        var rawData = '';
        req.on('data', function (data) {
            rawData += data;
        })
    
        req.on('end', function () {
            var inputdata = new URLSearchParams(rawData);
            res.writeHead(200,{"Content-Type": "text/html"});

            // Code may change from here

            res.write('User Name: ' +inputdata.get('name') + '<br>');
            res.write('User Email: ' +inputdata.get('email') + '<br>');

            // to here according to question.

            res.end();
        });
    } 
});

server.listen(5500, function () {

});