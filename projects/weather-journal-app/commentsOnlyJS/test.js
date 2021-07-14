// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer( function (req, res){
    res.writeHead(200, {'Content-Type': 'I can put any type here'});
    res.write("Hello world!");
    res.end();

}).listen(8000);
