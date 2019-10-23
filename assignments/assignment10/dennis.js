// "using strict"
// //Global Variable for Quote Generator
// let quotePos = 0; 

 
// function quoteGenerator(){
//     // This stores the quotes and also gets the header elem for later
    let leftHeaderElem = document.getElementById("left-header");
//     let quoteArray = [
//     "Average leaders raise the bar on themselves; good leaders raise the bar for others; great leaders inspire others to raise their own bar. -Orrin Woodward", 
//     "Wisdom equals knowledge plus courage. You have to not only know what to do and when to do it, but you have to also be brave enough to follow through. -Jarod Kintz",
//     "In a battle between two ideas, the best one doesn't necessarily win. No, the idea that wins is the one with the most fearless heretic behind it. -Seth Godin",
//     "Remember, teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability. -Patrick Lencioni",
//     "I cannot give you a formula for success, but I can give you the formula for failure, which is: Try to please everybody. -Herbert Bayard Swope"
//     ];

    //Delete previous created elems
    let prevQuoteElem = document.getElementById("quote-elem");
    if (prevQuoteElem != null){
        prevQuoteElem.remove();
    }

    // This creates the element and puts it after the header
    let quoteElem = document.createElement("p");
    quoteElem.id = "quote-elem";
    quoteElem.innerText = quoteArray[quotePos];
    leftHeaderElem.after(quoteElem);

    //increment quote pos, reset to 0 if at length
    quotePos++;
    if (quotePos >= quoteArray.length) {
        quotePos = 0;
    }


}

//takes in an inputElem and a num
function lottoNumChecker(numElem, lottoNum){
    let resultElem = document.createElement("span");
    resultElem.classList.add("result-elem");

    if (numElem.value == lottoNum) {
        resultElem.innerText = "match";
        numElem.after(resultElem);
    } else {
        resultElem.innerText = "not match";
        numElem.after(resultElem);
    }
}


function lotteryCheck(){

    /*
     * This section is all focus on dynamically cleaning up old elements 
     */
    // Removes old result spans, always remove from the end to avoid skipping elems
    let resultSpans = document.getElementsByClassName("result-elem");
    if (resultSpans.length > 0){
        for (let i = resultSpans.length -1; i >= 0; i--){
            resultSpans[i].remove();
        }
    }

    // Removes old lotto num elems
    let oldLottoNumElem = document.getElementById("lotto-num");
    if (oldLottoNumElem != null){
        oldLottoNumElem.remove();
    }

    // Removes old lotto win elem
    let oldLottoWinElem = document.getElementById("lotto-win");
    if (oldLottoWinElem != null){
        oldLottoWinElem.remove();
    }

    /*
    * This is where my code starts, this below generates a random number 
    */
    let lotteryNum = Math.floor((Math.random() * 89999) + 10000);
    //This splits the number into an array, but as strings
    let lotteryNumArray = (""+lotteryNum).split("");

    //Convert String Array to int array
    for (let num of lotteryNumArray) {
        num = parseInt(num);
    }
    
    //Get the 5 input values, put them into an array
    const inputNumElemArray = document.getElementsByClassName("lotto-input");

    // Calls a function that determines what to put after each input box
    for (let i = 0; i< 5;i++){
        lottoNumChecker(inputNumElemArray[i], lotteryNumArray[i]);
    }
    
    

    //This is the lotto num displayed above the button
    let lottoNumElem = document.createElement("p");
    lottoNumElem.id = "lotto-num";
    lottoNumElem.innerText = lotteryNum;
    this.before(lottoNumElem);

    //This displays the message after the button on if you win.  This is not a function because it needs to be in scope of the lottery numbers and the inputs
    let lottoWinElem = document.createElement("p");
    lottoWinElem.id = "lotto-win";
    if ((inputNumElemArray[0].value == lotteryNumArray[0]) && (inputNumElemArray[1].value == lotteryNumArray[1]) && (inputNumElemArray[2].value == lotteryNumArray[2]) && (inputNumElemArray[3].value == lotteryNumArray[3]) && (inputNumElemArray[4].value == lotteryNumArray[4])){
        lottoWinElem.innerText = "You won! That is amazing!";
    } else {
        lottoWinElem.innerText = "You lost... Try again?";
    }
    this.after(lottoWinElem);
}

window.onload = function(){

    //This displays quote on load
    this.quoteGenerator();

    //This cycles through quotes
    this.setInterval(this.quoteGenerator,2000);

    //get lotto button and call function on click
    let lottoButtonElem = this.document.getElementById("lotto-button");
    lottoButtonElem.onclick = this.lotteryCheck;
}