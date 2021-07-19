// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
// Require Express to run server and routes
const express =  require("express");

// Start up an instance of app
const app = express()


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false })); // json request body into JS object into req.body
app.use(bodyParser.json());
// app.use(express.urlencoded({extended: false}));
// app.get('/reqBody', (req, res) => {
//     console.log("wihout the body parser, you can see nothing. \nHowever, an empty JS object appears with the body parser")
//     res.send(req.body);
// })

// Cors for cross origin allowance
app.use(cors());    // for communication with the API (security wise) - allows API to be used by a foreign device

// Initialize the main project folder
app.use(express.static('website')); // makes website three files accecible >> endpoints

// Setup Server
app.listen(port, ()=>{
    console.log("server running on port ", port)
})

// endpoint: return the projectData 
app.get("/temperature", (req, res) => {
    // send javascript object projectData
    return res.send(projectData); // how to update the projectData with temp value
})

// endpoint: get data from the client 
app.post("/gettingData", (req, res) => {
    // access the body of the request
    // projectData = req.body; // this is two pointers to the same object 
    projectData = {...req.body} // spread operator: a new object here
    res.end(); // end this response >> res.send(projectData)    
})