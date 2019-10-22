function highlightCell(event){
    let callerName = event.target.tagName;
    
    //for anything other than a table cell get out
    if(callerName.toLowerCase() != "td"){
        console.log("highlight cell");
    }

    //highlight cell
    
}

window.onload = function(){
    this.document.getElementById("animal-table").onclick = this.highlightCell;
}