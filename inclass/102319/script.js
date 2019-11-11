//let person = new Object();
//above is another way to say what is below
//let person = {};

//json format
let person = {
    firstName: "Amy",
    lastName: "Smith",
    age: 20,
    hobbies: ["reading","learning","studying"],

    //adding a function to this object
    sayHello(){
        console.log("Hello " + this.firstName);
    },
}



//console.log(person.firstName + " " + person.lastName);

//get a key from the user and display the value
// let key = "firstName";
// console.log(person[key]); 
// console.log(person["lastName"]);

// //loop through the keys in person
// for (key in person){
//     console.log(person[key]) //remove [] to just get "firstName lastName age"
// // }

// for(let item in person){
//     console.log(item + ": " + person[item]);
// }

person.sayHello();