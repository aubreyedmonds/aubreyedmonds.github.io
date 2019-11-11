function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    //this property is a function
    this.sayHello = function(){
        console.log("Hello " + this.firstName + this.lastName);
    }
}

//ask user their name and send to constructor
let fName = prompt("Enter first name please :)");
let lName = prompt("Enter last name");

let me = new Person(fName, lName);
me.sayHello();

// let me = new Person("Amy", "Smith");
// // console.log("Person is " + me.firstName);
// me.sayHello();