const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

projectData = {};


const app = express()
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
  console.log('running on localhost: 8090');
  console.log('server running successfully!')
})

/*app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})*/

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

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = 'hello'

const getSentiment = async (req, res)=>{
  const response = await fetch(baseURL + apiKey + '&lang=en&txt=Main dishes were quite good, but desserts were too sweet for me.');
  console.log(response);
  try {
      const data = await response.json();
      console.log(data);
      return data;
  }catch(error) {
    console.log("Error", error);
  }
}
