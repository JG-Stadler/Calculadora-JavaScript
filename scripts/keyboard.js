const resultBox = document.getElementById("result");
function Insert(elementValue){
    resultBox.innerText = resultBox.innerText + elementValue.innerText;
}

function ClearKeyBoard(){
    resultBox.innerText = "";
}