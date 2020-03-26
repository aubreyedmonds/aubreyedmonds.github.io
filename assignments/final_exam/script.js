"using strict"

function toggleFunction(){
    console.log("testing toggle");
    let contentDrop = document.getElementById("content");
    contentDrop.classList.toggle("hidden");

}

async function displayFishies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/fish.json");
    let fishJson = await response.json();
    let contentDiv = this.document.getElementById("content");

    for(i in fishJson){
        let fish = fishJson[i];
        contentDiv.append(getFish(fish));
    }
}

function getFish(fish){
    let fishSectionElem = document.createElement("section");
    fishSectionElem.className = "fish-section";

    let fishTitle = document.createElement("h3");
    fishTitle.innerHTML = fish.title;
    fishSectionElem.append(fishTitle); 

    fishSectionElem.append(addPara(`Lifespan: ${fish.lifespan}`));
    fishSectionElem.append(addPara(`Length: ${fish.length}`));
    fishSectionElem.append(addPara(`Description: ${fish.description}`));
    
    //new lines
    fishSectionElem.append(addImg(fish.img));
    fishSectionElem.append(arrayDetails(fish.colors));

    return fishSectionElem;
}

//new function
function arrayDetails(fish){
    let ulElem = document.createElement("ul");
    let fishLiElem = document.createElement("li");
    let fishString = "<b>Colors: </b>";

    for(i in fish.colors){
        if(i != 0){
            fishString += ", " + fish.colors[i];
        } else {
            fishString += fish.colors[i];
        }
    }

    fishLiElem.innerHTML = fishString;
    ulElem.append(fishLiElem);

    return ulElem;
}

//new function
function addImg(path){
    const basePath = "https://portiaportia.github.io/csce242/json/";
    let fullPath = basePath + path;
    let imgElem = document.createElement("img");
    imgElem.src = fullPath;
    return imgElem;
}

function addPara(text){
    let paraElem = document.createElement("p");
    paraElem.innerText = text;
    return paraElem;
}

window.onload = function(){

    this.displayFishies();

    const contentDrop = document.getElementById("content");
    contentDrop.hidden = false;
    const toggleButton = document.getElementById("btn");
    toggleButton.onclick = toggleFunction;
}

// *{
//     box-sizing: border-box;
//     font-family: Arial, Helvetica, sans-serif;
// }

// /* #content{

// } */

// .fish-section{
//     background: lightblue;
//     padding: 10px;
//     border-radius: 10px;
//     margin: 10px auto;
// }

//not in original
// .brewery-section{
//     background: #2778C7;
//     padding: 5px;
//     margin: 20px;
//     box-shadow: 5px 15px 5px 0px #000;
// }
