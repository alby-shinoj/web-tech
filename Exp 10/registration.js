var http = require('http');
const fs = require('fs');
const { URLSearchParams } = require('url');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/college')
.then(function () {
    console.log('DB Connected')
})

const studentSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
    phone: Number,
    email: String,
    gender: String,
    state: String
});
const studentmodel = mongoose.model('students', studentSchema);

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream('registration.html').pipe(res);
    }
    else if (req.url === '/save' && req.method == 'POST') {
        var rawData = '';
        req.on('data', function (data) {
            rawData += data;
        })
        req.on('end', function () {
            var formdata = new URLSearchParams(rawData);
            res.writeHead(200, { "Content-Type": "text/html" });
            studentmodel.create({
                name: formdata.get('name'),
                password: formdata.get('password'),
                age: formdata.get('age'),
                phone: formdata.get('phone'),
                email: formdata.get('email'),
                gender: formdata.get('gender'),
                state: formdata.get('state')
            })
            res.write('Saved Sucessfully')
            res.end();
        });
    }
    else if (req.url === '/view' && req.method === 'GET') {
        res.writeHead(200, { "Content-Type": "text/html" });
        studentmodel.find().then(function(students){
            res.write("<table width='1262px' style='font-family: Courier New, Courier, monospace'><thead height='80px'><tr style='background-color: rgb(63, 62, 62)'><th align='center' style='color: white' colspan='2'><h1 style='font-size: xx-large'>Aispark</h1></th></tr><tr height='40px'><td style='background-color: green; color: white' colspan='2'><a href='application.html' style='color: white'>Application Form</a>/<a href='#' style='color:white'>List of Students</a></td></tr></thead>");
            res.write("<tbody><tr><table cellspacing=1 width=1200px border=1><tr><th>Name</th><th>Password</th><th>Age</th><th>Phone No.</th><th>Email</th><th>Gender</th><th>State</th></tr>");
            students.forEach(student => {
                res.write('<tr>');
                res.write('<td>'+student.name+'</td>');
                res.write('<td>'+student.password+'</td>');
                res.write('<td>'+student.age+'</td>');
                res.write('<td>'+student.phone+'</td>');
                res.write('<td>'+student.email+'</td>');
                res.write('<td>'+student.gender+'</td>');
                res.write('<td>'+student.state+'</td>');
                res.write('</tr>');
            })
            res.write("</tr></table></tr></tbody></table>");
            res.end();
        })
    }
});

server.listen(5500, function () {
    
});
