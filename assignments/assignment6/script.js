"using strict"

//variables
const firstName = document.getElementById("aubrey").innerText;
const lastName = document.getElementById("edmonds").innerText;
const productName = document.getElementById("beachballs").innerText;
const productAmount = document.getElementById("amount").innerText;
const productPrice = document.getElementById("price").innerText;
const taxation = document.getElementById("tax").innerText;
const results = document.getElementById("result");
const total = document.getElementById("totalDisplayed");

//math
const totalPrice = productAmount*productPrice;
const totalTax = totalPrice*taxation;
const finalTotal = (totalPrice) + totalTax;

//rounding
const finalTotalRounded = finalTotal.toFixed(2);
total.textContent = `${finalTotalRounded}`;

//displayed at bottom
results.textContent = `${firstName} ${lastName} ordered ${productAmount} ${productName}(s)`;

