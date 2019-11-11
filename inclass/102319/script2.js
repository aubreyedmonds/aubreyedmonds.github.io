let MenuItems = {
    Cheese: 3,
    Banana: 2,
    OrangeJuice: 5,
}

//loop through and double all the items, then
//add them to the total
total = 0;

for(let item in MenuItems){
    MenuItems[item] *= 2;
    total += MenuItems[item];
}

console.log("Total is " + total);