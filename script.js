const resultBox = document.getElementById("result");
function Insert(elementValue){
    resultBox.innerText = resultBox.innerText + elementValue;
}

function ClearKeyBoard(){
    resultBox.innerText = "";
}

function Back(){
    resultBox.innerText = resultBox.innerText.slice(0,-1);
}

function Calculate(){
    if(resultBox.innerText != ""){
        const finalResult = eval(resultBox.innerText);
        resultBox.innerText = finalResult;
    }
    else{
        alert("Você precisa digitar algo para poder calcular");
    }
}