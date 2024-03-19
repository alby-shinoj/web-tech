var http = require('http');
const fs= require('fs');
const {URLSearchParams} = require('url');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/college');

const studentSchema = new mongoose.Schema({
    name: String,
    regno: Number,
    email: String,
    cgpa: String,
    credits: Number
});

const studentModel = mongoose.model('students', studentSchema);

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream('Form.html').pipe(res);
    }

    else if(req.url === '/signup' && req.method == POST){
        var raw = '';
        req.on('data', function(data){
            raw += data;
        });

        req.on('end', function(){
            var formdata = new URLSearchParams(raw);
            studentModel.create({
                name: formdata.get('name'),
                regno: formdata.get('regno'),
                email: formdata.get('email'),
                cgpa: formdata.get('cgpa'),
                credits: formdata.get('credits')
            })
        })
    }

    else if(req.url === '/view' && req.method == GET){
        res.writeHead(200, { "Content-Type": "text/html" });
        studentModel.find().then(function(students){
            res.write("<table>");
            res.write("<tr><th>Name</th><th>Reg No</th><th>Email</th><th>CGPA</th><th>Credits</th></tr>");
            students.forEach(student => {
                res.write('<tr>');
                res.write('<td>'+ student.name +'</td>');
                res.write('<td>'+ student.regno +'</td>');
                res.write('<td>'+ student.email +'</td>');
                res.write('<td>'+ student.cgpa +'</td>');
                res.write('<td>'+ student.credits +'</td>');
                res.write('</tr>');
            })
            res.write("</table>");
            res.end();
        })
    }
});

server.listen(5500, function(){

});