function highlightCell(event){
    let callerName = event.target.tagName;
    
    //for anything other than a table cell get out
    if(callerName.toLowerCase() != "td"){
        console.log("highlight cell");
    }
    console.log("")
    //highlight cell
    event.target.classList.add("highlight");
}

function unHighlightCell(event){
    let callerName = event.target.tagName;
    
    //for anything other than a table cell get out
    if(callerName.toLowerCase() != "td"){
        console.log("highlight cell");
    }

    //highlight cell
    event.target.classList.remove("highlight");
}

function showAnimals(){
    //select elements like we would with css with query selector
    let animalTDs = document.querySelector("#animal-table td");
    let p = document.createElement("p");
    this.after(p);
    //use for of loop
    for(let animalTD of animalTDs){
        p.innerHTML += animalTD.innerHTML + ", ";
    }

}

function stylePara(){
    let p = document.querySelector(".special");
    //above line is equivalent to line below this one
    let p = document.getElementsByClassName("special")[0];
    p.classList.toggle("highlight");
}

window.onload = function(){
    this.document.getElementById("animal-table").onmouseover = highlightCell;
    this.document.getElementById("animal-table").onmouseout = unHighlightCell;
    //this.document.getElementById("animal-table").addEventListener("mouseover", highlightCell);
    this.document.getElementById("btn-show").addEventListener("click", showAnimals);
    this.document.getElementById("btn-style").addEventListener("click", stylePara);
    this.setInterval(stylePara, 1000);
}