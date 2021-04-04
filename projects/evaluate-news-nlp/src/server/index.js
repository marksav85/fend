var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();


/*let meaning = new MeaningCloud({
  key: process.env.API_KEY // API Key. Required.
});*/

var json = {
    'title': 'test json response',
    'message': 'this is a thing',
    'time': 'now'
}

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

// designates what port the app will listen to for incoming requests
app.listen(8090, function () {
    console.log('Example app listening on port 8090!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = 'a30afc3cadc818a1fb48d2163587cd5f'
console.log('Your API Key is' + apiKey)
let userInput = []

app.post('/data', async(req, res) => {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const getAPI = '${baseURL}key=${apiKey}&url=${userInput}&lang=en'
    const response = await fetch(getAPI);
    console.log (response)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("error", error);
    }
});
