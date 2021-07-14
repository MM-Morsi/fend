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
// get request method
app.get('/', function (req, res) {
    res.send("Hello World")
})
// post request method
app.post('/', (req, res) => {
    res.send("POST request to the homepage!")
})
// all request method
app.all('/secret', function (req, res, next) {
    res.send("This is an all implementation. Remove this and get request will give an error")
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})
//request parameter
app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})
// listener
app.listen(port, () => {
    console.log(`Put htis in your broweser to open the application:  localhost:${port}`);
})

