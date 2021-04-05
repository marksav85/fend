function handleSubmit(event) {
    event.preventDefault();

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
    .then(res => res.json())
    .then(function(res) {
        let element = document.getElementById('results');
        Client.updateUI(element, res);
    })
}

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
