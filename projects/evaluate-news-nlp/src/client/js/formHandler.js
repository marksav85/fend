

// Personal API Key for meaningCloud API


/* Global Variables */
const local = 'http://localhost:8090/';

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    console.log("::: Form Submitted :::")

    /*fetch('http://localhost:8090/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/
    getSentiment(baseURL, apiKey)
    .then(function(data){
      // Add data
      postData('http://localhost:8090/add', {agreement: data.agreement, confidence: data.confidence, irony: data.irony});
      })
    .then(function(){
      updateUI()
    })
}

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
