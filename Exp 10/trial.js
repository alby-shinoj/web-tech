var http = require("http");

const fs = require("fs");
const server = http.createServer(function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./home.html").pipe(res);
    } else if (req.url === "/server" && req.method == "POST") {
        var rawData = "";
        req.on("data", function (data) {
            rawData += data;
        });
        req.on("end", function () {
            var inputdata = new URLSearchParams(rawData);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("Data 1: " + inputdata.get("data1") + "<br>");
            res.write("Data 2: " + inputdata.get("data2") + "<br>");
            res.end();
        });
    }
});
      
server.listen(2000, function () {
    console.log("listening at 2000");
});

//To include mongoose module in node js program
const mongoose = require('mongoose');

//Connecting to the mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/college')
.then(function(){
    console.log('DB Connected')
});

//Defining the Structure of mongodb document
const studentSchema = new mongoose.Schema({name:String, email:String, phone:String});
console.log('Schema created');

//Create collection model
const studentmodel = mongoose.model('students',studentSchema);
console.log('Collection model created');

//To insert data in mongodb database collection
studentmodel.create({name:formData.get('name'), email:formData.get('email'), phone:formData.get('phone') });
