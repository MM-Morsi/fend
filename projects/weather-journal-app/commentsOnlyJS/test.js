// Load HTTP module
/*
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer( function (req, res){
    res.writeHead(200, {'Content-Type': 'I can put any type here'});
    res.write("Hello world!");
    res.end();

}).listen(8000);
*/

// learn express steps 
var express = require('express')
var app = express();
const port = 3000

app.get('/', function(req,res){
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Puthtis in your broweser to open the application:  localhost:${port}`);
})
