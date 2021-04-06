var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
projectData = {};


const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
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
