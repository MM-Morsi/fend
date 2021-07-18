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

//async js at time
/*
setTimeout(function(){
    console.log("Third")
}, 3000)
console.log("first");
console.log("second")
*/

//Async Promises
/* 
var promise = new Promise(function(resolve, reject){
    if(){
        resolve("Worked")
    }
    else {
        reject{Error("Broken")}
    }
})
*/

//
const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    })
    try {
        const newData = await response.json();
        return newData
    }catch(error){
        console.log("error:", error);
    }
}

postData('/addMovie', {movie:'the matrix', score: 5})

// // learn express steps 
// var express = require('express');
// const { setTimeout } = require('timers/promises');
// var app = express();
// const port = 3000

// // get request method
// app.get('/', function (req, res) {
//     res.send("Hello World")
// })

// // post request method
// app.post('/', (req, res) => {
//     res.send("POST request to the homepage!")
// })

// // all request method
// app.all('/secret', function (req, res, next) {
//     res.send("This is an all implementation. Remove this and get request will give an error")
//     console.log('Accessing the secret section ...')
//     next() // pass control to the next handler
// })

// //request parameter
// app.get('/users/:userId/books/:bookId', function (req, res) {
//     res.send(req.params)
// })

// // callback functions & next 
// app.get('/NextCallback', function (req, res, next) {
//     console.log("TThe response is handeled by the next function")
//     next()
// }, function (req, res) {
//     res.send("Hello Next Callbacks!")
// })

// // array of callback functions & independant functions
// var cb0 = function (req, res, next) {
//     console.log('CB0')
//     next()
// }

// var cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
// }

// app.get('/example/d', [cb0, cb1], function (req, res, next) {
//     console.log('the response will be sent by the next function ...')
//     next()
// }, function (req, res) {
//     res.send('Hello from D!, an independant function')
// })

// // app.route()
// app.route('/book')
//     .get(function (req, res) {
//         res.send('Get a random book')
//     })
//     .post(function (req, res) {
//         res.send('Add a book')
//     })
//     .put(function (req, res) {
//         res.send('Update the book')
//     })
// // bird.js >> seperate file for a route (page and its following pages)
// var birds = require('./birds')
// app.use('/birds', birds)

// // listener
// app.listen(port, () => {
//     console.log(`Put htis in your broweser to open the application:  localhost:${port}`);
// })

