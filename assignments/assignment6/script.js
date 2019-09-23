const name = prompt("Please enter your name, friend");
const lastname = prompt("And your last name?");
const beachballs = prompt("How many coffees would you like?");

const price = coffees * 1.50;
const tax = price * .07;
const cTip = parseFloat(tip);
const totalP = parseFloat(price + tax + cTip);
const totalPrice = parseFloat(totalP.toFixed(2));

let total = document.getElementById("total");

total.innerHTML = name + " purchased " + coffees + " coffees. Their total is: $" + totalPrice + ". Thank you! Please come again :)";