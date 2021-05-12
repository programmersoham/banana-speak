var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
const serverUrl = "	https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured: ", error);
    alert("Try again after sometime!");
}

btnTranslate.addEventListener("click", () => {
    var inputText = txtInput.value;

    fetch(getTranslatedUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
});