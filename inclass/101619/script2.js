// //different way of declaring function
// let sum = function(a, b){
//     return a + b;
// }

let sum = (a, b) => a+b;

console.log(sum(5,10));

//create an arrow function called triple
//it will take in one parameter, and return the triple of it
//then test it

let triple = (a) => a+a+a;
console.log(triple(3));