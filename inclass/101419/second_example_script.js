"using strict"

function showFoodsFunction(){
    console.log("testing");
    let foodPs = document.getElementsByClassName("food");
    //let foodPs = document.getElementsByTagName("p"); 
    //the above gets everything by their tag name
    let pElem = document.createElement("p");
    this.after(pElem);
    pElem.innerHTML="I like... ";

    for(let foodElem of foodPs){
        pElem.innerHTML+=foodElem.innerHTML+", ";
    }
}

// function showRandomFoodFunction(){

// }

window.onload = function(){
    const showFoodsButton = document.getElementById("show-foods-button");
    showFoodsButton.onclick = showFoodsFunction;
    // const showRandomFoodButton = document.getElementById("show-random-food-button");
    // showRandomFoodButton.onclick = showRandomFoodFunction;
    
}
