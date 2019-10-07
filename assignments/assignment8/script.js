"using strict"

function showAsciiValue(){
    let resultElemAscii = document.getElementById("result-ascii");
    let enteredWord = document.getElementById("txt-entered-ascii").value;
    enteredWord = enteredWord.toLowerCase().trim();

    switch(enteredWord){
        case "doll":
            resultElemAscii.innerHTML = "I love dolls";
            break;
        case "car":
            resultElemAscii.innerHTML = "I love cars";
            break;
        default:
            resultElemAscii.innerHTML = "I <strong>don't</strong> love this";
    }
    
}

function sumOfAll(){
    let resultElemSum = document.getElementById("result-sum");
    let enteredNumber = document.getElementById("txt-entered-sum");
    enteredNumber = enteredNumber.toLowerCase().trim();

    switch(enteredNumber){
        case "doll":
            resultElemSum.innerHTML = "I love dolls";
            break;
        case "car":
            resultElemSum.innerHTML = "I love cars";
            break;
        default:
            resultElemSum.innerHTML = "I <strong>don't</strong> love this";
    }
}

window.onload = function(){
    const btnAscii = document.getElementById("btn-ascii");
    const btnSum = document.getElementById("btn-sum");
    btnAscii.onclick = this.showAsciiValue;
    btnSum.onclick = this.sumOfAll;
}  