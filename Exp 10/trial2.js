// Initializing http module
const http = require('http');

// to read the html file
const fs = require('fs');

// Creating Server
const server = http.createServer(function(req, res){                // req - request, res - response;
    if(req.url === '/'){                                             
        res.writeHead('200', {'Content-Type' : 'text/html'});       // content-type specifies the type of content given 
        fs.createReadStream('trial.html').pipe(res);                // createReadStream reads the html file; pipe- feeds the form input to the response
    }
    else if(req.url === '/signup' && req.method === 'POST'){
        var rawData = '';
        req.on('data', function(data){
            rawData += data;
        })
        req.on('end', function(){
            var formData = new URLSearchParams(rawData);
            res.writeHead('200', {'Content-Type' : 'text/html'});
            res.write('Data1: ' + formData.get('data1') + '<br>');
            res.write('Data2: ' + formData.get('data2') + '<br>');
            res.end();
        })
    }
})

server.listen('8000', function(){                                       // server listening for requests
    console.log('Server started at port http://127.0.0.1:8000');
})