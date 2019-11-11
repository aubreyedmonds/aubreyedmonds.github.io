"using strict"
//comment entered to test pushing
//finish code from pictures


function compareLottoNumbers(){
    let userLottoNum = getUserNumbers();
    let officialLottoNum = generateLottoNumber();
    let match = true;
    let feedbackElems = document.getElementsByClassName("feedback");
    let resultElem = document.getElementById("result");

    this.after(resultElem);
    for(let i=0; i < userLottoNum.length; i++){
        if(userLottoNum[i] == officialLottoNum[i]){
            feedbackElems[i].textContent = "match";
        } else{
            feedbackElems[i].textContent = "not a match";
            match = false;
    }
}

if(match){
    resultElem.textContent = "Yay!"
} else {
    resultElem.textContent = "Nope."
}
}




function quoteFunction(){
    //array of quotes
    var quoteArray = ["Years of love have been forgot, in the hatred of a minute. - Edgar Allan Poe","You cannot conquer a free man. The most you can do is kill him. - Robert Heinlein", "Jeffrey Epstein didn't kill himself.", "The hour of departure has arrived, and we go our ways. I to die, and you to live. Which is better, God only knows. - Socrates","A ship is safe in a harbor. But that's not what ships are for.","How lucky I am to have something that makes saying goodbye so hard. - Winnie the Pooh :)"];
    var i = 0;
    //display a quote under the header in the span id
    setInterval(function(){
        document.getElementById('Quotes').innerHTML = quoteArray[i++];
        //go back to beginning if necessary
        if(i == quoteArray.length){
            i=0;
        }
    }, 2000);
}

window.onload = function(){
    this.quoteFunction();
    let lottoButton = document.getElementById("btn-lotto");
    lottoButton.onclick = this.compareLottoNumbers;
}