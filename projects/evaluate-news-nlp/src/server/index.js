<<<<<<< HEAD
var path = require('path');
const express = require('express');
const fetch = require("node-fetch");
var bodyParser = require('body-parser');
var cors = require('cors');
/*var validator = require('validator');*/
const app = express();
let reqType = 'txt';

// console.log(__dirname)
||||||| 04a019f
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var MeaningCloud = require('meaning-cloud');
const dotenv = require('dotenv');
dotenv.config();

/*let meaning = new MeaningCloud({
  key: process.env.API_KEY // API Key. Required.
});*/

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
=======
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

projectData = {};


const app = express()
>>>>>>> test
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})
app.get('/test', function (req, res) {
    res.send(projectData)
})
// designates what port the app will listen to for incoming requests
app.listen(8090, function () {
<<<<<<< HEAD
    console.log('Example app listening on port 8090!');
||||||| 04a019f
    console.log('Example app listening on port 8090!')
=======
  console.log('running on localhost: 8090');
  console.log('server running successfully!')
>>>>>>> test
})

<<<<<<< HEAD
app.post('/userData', async(req, res) => {
    // check if user input is url, text is default
    /*if (validator.isURL(req.body.input)) {
        reqType = 'url';
    }*/

||||||| 04a019f
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
=======
/*app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})*/
>>>>>>> test

<<<<<<< HEAD
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&${reqType}=${req.body.input}`);
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("error", error);
    }
});
||||||| 04a019f
app.post('/data', async(req, res) => {
    const res = await fetch();
    try {
        const data = await res.json();
        res.send(data);
    } catch(error) {
        console.log("error", error);
    }
});
=======
app.get('/all', sendData);
function sendData (req, res) {
  res.send(projectData);
  console.log(projectData)
};

app.post('/add', addData);
function addData(req, res) {
  projectData.agreement = req.body.agreement;
  projectData.confidence = req.body.confidence;
  projectData.irony = req.body.irony;

  console.log(projectData);
}
>>>>>>> test
