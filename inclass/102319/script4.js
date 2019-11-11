//create a circle class and it will have a radius
//it will also have a perimeter and area function
//when you click display it will display the area and perimeter 

//NOTES FOR ASSIGNMENT 11
//img = doc.createElem("img");
//img.src = "iamges/" + fileName


function Circle(radius){
    this.radius = radius;

    this.getArea = function(){
        return Math.PI * Math.pow(this.radius,2);
    }

    this.getPerimeter = function(){
        return 2 * Math.PI * radius;
    }
}

//i get radius
//make a new circle with corresponding radius
//get the element you want to write to
//write to the paragraph with the results from circle
function showCircleData(){
    let rad = document.getElementById("txt-radius").value;
    let myCircle = new Circle(rad);
    let resultP = document.getElementById("result");
    resultP.innerHTML = "Area: " + myCircle.getArea() + "<br>" +
                                    "Perimeter: " + myCircle.getPerimeter();
}


//onload I get my button and when button is called i get data
window.onload = function(){
    let myButton = document.getElementById("btn-display");
    myButton.onclick = this.showCircleData;

}