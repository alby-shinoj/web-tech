const fs = require('fs');
var http = require('http');
const { URLSearchParams } = require('url');

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream('trial3.html').pipe(res);
    }

    else if(req.url === '/signup' && req.method == 'POST'){
        var raw = '';
        req.on('data', function(data){
            raw += data;
        })

        req.on('end', function(){
            res.writeHead(200,{"Content-Type": "text/html"});
            fs.open('text1.txt', 'w', function(err){
                if(err) throw err;
                console.log('File Opened');
                res.write('File Opened');
            })

            fs.appendFile('text1.txt', raw, function(err){
                if(err) throw err;
                console.log('File Appended');
                res.write('File Appended'); 
            })
            res.end();
        })
    }
})

server.listen(5500, function(){

});