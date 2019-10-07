//while loop from 1 to 10 and display the numbers in the console
// console.log("hi");
// let count = 1;
// while(count <= 10){
//     console.log(`${count}`);
//     count++;
// }

//while loop from 1 to 10 and display in an unordered list
//create unordered list element
function displayCount(){
    console.log("starting displayCount...");
    ulElem = document.createElement("ul");
    contentElem = document.getElementById("content");
    contentElem.append(ulElem);

    let count = 1;

    while(count <= 10){
        //create list element
        liElem = document.createElement("li");
        liElem.innerText = count;
        //append list element to ul element
        ulElem.append(liElem);
        console.log(`${count}`);
        count++;
    }
}

function displayLinks(){
    let linksElem = document.getElementById("links");
    console.log("starting displayLinks...");
    for(let i=1; i <= 5; i++){
        aElem = document.createElement("a");
        linksElem.append(aElem);
        aElem.innerText = `Page${i}`;
        aElem.href=`#${i}`;
        console.log(i);
    }
}

function displayTimesTables(){
    console.log("starting displayTimesTables....");
    //insert table after button
    let tableElem = document.createElement("table");
    //in order to make it so you can style it
    //tableElem.id = "dsfds";
    this.after(tableElem);
    //loop through and create the rows
    for(let row = 1; row <= 10; row++){
        let tableRow = document.createElement("tr");
        tableElem.append(tableRow);

        //tableRow.innerHTML="Testing " + col;
        for(let col = 1; col <= 10; col++){
            let tableCol = document.createElement("td");
            tableElem.append(tableCol);
            tableCol.innerHTML = row*col;
        }
    }

}



window.onload = function(){
    console.log("hi");
    this.displayCount();
    this.displayLinks();

    let multBtn = document.getElementById("mult-btn");
    multBtn.onclick = this.displayTimesTables; //no () because it is connected to a click
    
}