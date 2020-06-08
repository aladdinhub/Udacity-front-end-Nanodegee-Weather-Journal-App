// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;

const server = app.listen(port, listening);

function listening(){
    console.log(`server running on port: ${port}`)
}

//get function

app.get('/allData', sendData);

function sendData(request, response){
    response.send(projectData);
}

//post function

app.post('/addData', addData);

function addData(request, response){

    let data = request.body;

    console.log('server side data ', data)

    //date
    //temp -> temperature
    // feelings -> user's input

    projectData["date"] = data.date;
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feeling;

    response.send(projectData);
}