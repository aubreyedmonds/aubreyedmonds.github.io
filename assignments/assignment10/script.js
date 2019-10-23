"using strict"

function quoteFunction(){
    //array of quotes
    var quoteArray = ["bing","bong","boom","box","beep"];
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
}