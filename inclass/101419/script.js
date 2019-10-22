"using strict"

function showFoodsFunction(){
    console.log("testing");
    let foods = [popcorn, cherries, apple, beep, boop];
    let foodResult = document.getElementById("result");
    let ulElem = document.createElement("ul");
    this.after(ulElem);

    for(let item of foods){
        let li = document.createElement("li");
        ulElem.append(li);
        li.innerHTML = item;
    }
}

window.onload = function(){
    const showFoodsButton = document.getElementById("show-foods-button");
    showFoodsButton.onclick = showFoodsFunction;
}
