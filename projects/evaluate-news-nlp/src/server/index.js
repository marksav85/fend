var path = require('path');
const express = require('express');
const fetch = require("node-fetch");
var bodyParser = require('body-parser');
var cors = require('cors');
/*var validator = require('validator');*/
const app = express();
let reqType = 'txt';

// console.log(__dirname)
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8090, function () {
    console.log('Example app listening on port 8090!');
})

app.post('/userData', async(req, res) => {
    // check if user input is url, text is default
    /*if (validator.isURL(req.body.input)) {
        reqType = 'url';
    }*/


    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&${reqType}=${req.body.input}`);
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("error", error);
    }
});
