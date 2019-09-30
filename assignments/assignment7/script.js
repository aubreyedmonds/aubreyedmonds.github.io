"using strict"

// function whosTheOldest(){
//     //variables for box1 
//     const nameOneElement = document.getElementById("name-one").value;
//     const ageOneElement = document.getElementById("age-one").value;
//     const nameTwoElement = document.getElementById("name-two").value;
//     const ageTwoElement= document.getElementById("age-two").value;
//     const nameThreeElement = document.getElementById("name-three").value;
//     const ageThreeElement = document.getElementById("age-three").value;
//     /*six possible conclusions*/
    
// }

function box2(){ //hello world
    console.log("testing");
    const enteredLanguage = document.getElementById("language");
    let chosenLanguage = enteredLanguage.value;
    chosenLanguage = chosenLanguage.toLowerCase().trim();

    let boxResult = document.getElementById("box2Result");
    //if statement
    if(chosenLanguage == "English"){
        boxResult.innerText = "Hello World!";
    } else if(chosenLanguage == "Spanish"){
        boxResult.innerText = "Hola mundo!";
    } else if(chosenLanguage == "French"){
        boxResult.innerText = "Bounjour le monde!";
    } else if(chosenLanguage == "Portuguese"){
        boxResult.innerText = "Olá Mundo";
    } else {
        boxResult.innerText = "Please enter in the following: English, Spanish, French, or Portuguese";
    }
}

window.onload = function(){
    const helloWorldButton = document.getElementById("display-hello");
    helloWorldButton.onclick = box2;
}
