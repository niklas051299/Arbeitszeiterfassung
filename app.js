//Deklarieren von Konstanten
const form = document.querySelector('form');
const inputValue = document.getElementById('userId');
const resultText = document.getElementById('result');
const getter = document.getElementById('getter');

//Funktion des Einstechen-Button
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const valueToSend = inputValue.value;
    const apiUrl = 'https://9eyk3o71xh.execute-api.us-east-1.amazonaws.com/prod/';

    //Senden von HTTP-Request
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({'userId': valueToSend, 'buttonType': 'submit' })
    })

        //Antwort auf Request enthält die angeforderten Daten
        .then(response => response.json())

        .then(data => {
            if (data.errorMessage) {
                resultText.textContent = data.errorMessage;
            } else {
                //Ausgabe mit Formatierung
                let str = `${data.body}`;
                resultText.textContent = str.replace("GMT+0000 (Coordinated Universal Time)", "");
            }
        })

        .then(data => console.log(data))
        .catch(error => console.error(error))
});

//Funktion des Ausstechen-Button
getter.addEventListener('submit', (event) => {
    event.preventDefault();

    const valueToSend = inputValue.value;
    const apiUrl = 'https://9eyk3o71xh.execute-api.us-east-1.amazonaws.com/prod/';

    //Senden von HTTP-Request
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({'userId': valueToSend, 'buttonType': 'get' })
    })

        //Antwort auf Request enthält die angeforderten Daten
        .then(response => response.json())
        .then(data => {
            if (data.errorMessage) {
                resultText.textContent = data.errorMessage;
            } else {
                //Ausgabe mit Formatierung
                let str = `${data.body}`;
                resultText.textContent = str.replace("GMT+0000 (Coordinated Universal Time)", "");
            }
        })

        .then(data => console.log(data))
        .catch(error => console.error(error))
});