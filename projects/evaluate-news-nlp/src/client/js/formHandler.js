

// Personal API Key for meaningCloud API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = 'hello'

/* Global Variables */
const local = 'http://localhost:8090/';

function handleSubmit(event) {
    event.preventDefault();

<<<<<<< HEAD
    // get text that user submitted
    let formText = document.getElementById('name').value;
    analyzeText(formText);
}

function analyzeText(formText) {
    fetch('/userData', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formText })
    })
||||||| 04a019f
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8090/test')
=======
    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    console.log("::: Form Submitted :::")

    /*fetch('http://localhost:8090/test')
>>>>>>> test
    .then(res => res.json())
    .then(function(res) {
<<<<<<< HEAD
        let element = document.getElementById('results');
        Client.updateUI(element, res);
||||||| 04a019f
        document.getElementById('results').innerHTML = res.message
=======
        document.getElementById('results').innerHTML = res.message
    })*/
    getSentiment(baseURL, apiKey)
    .then(function(data){
      // Add data
      postData('http://localhost:8090/add', {agreement: data.agreement, confidence: data.confidence, irony: data.irony});
      })
    .then(function(){
      updateUI()
>>>>>>> test
    })
}

<<<<<<< HEAD
function updateUI(element, content) {
    // display error message if text couldn't be analyzed by MeaningCloud API
    if(content.confidence === undefined) {
        element.innerHTML = `Sorry, I couldn't analyze this text.<br><strong>Error ${content.status.code}:</strong> "${content.status.msg}"`;
    }
    else {
        element.innerHTML = `<strong>Confidence: </strong>${content.confidence}<br>
        <strong>Score tag: </strong>${content.score_tag}<br>
        <strong>Subjectivity: </strong>${content.subjectivity}<br>
        <strong>Irony: </strong>${content.irony}`;
    }
}

export { updateUI };
export { handleSubmit };
export { analyzeText };
||||||| 04a019f
export { handleSubmit }
=======
// Function to update UI
const updateUI = async () => {
  const request = await fetch('http://localhost:8090/all');
  try{
    const allData = await request.json();
    document.getElementById('agreement').innerHTML = 'Agreement: ' + allData.agreement;
    document.getElementById('confidence').innerHTML = 'Confidence: ' + allData.confidence;
    document.getElementById('irony').innerHTML = 'Irony: ' + allData.irony;
  }catch(error){
    console.log("Error", error);
  }
}

// Function to GET API Data
const getSentiment = async (req, res)=>{
  const response = await fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + apiKey + '&lang=en&txt=Main dishes were quite good, but desserts were too sweet for me.');
  console.log(response);
  try {
      const data = await response.json();
      console.log(data);
      return data;
  }catch(error) {
    console.log("Error", error);
  }
}

// Function to POST data
const postData = async ( url = '', data = {})=>{
    const req = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    try {
      const newData = await req.json();
      console.log(newData);
      return newData
    }catch(error) {
      console.log("Error", error);
    }
}

export { handleSubmit }
export { updateUI }
export { getSentiment }
>>>>>>> test
