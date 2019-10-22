//classes
//array
//for loop
//displaying totals
//creating table of elements

class Food{
    constructor(name, calories){
        this._calories = calories;
        this._foodName = name;
    }

    getFoodName(){
        return this._foodName;
    }

    getCalories(){
        return this._calories;
    }

    getTableRow(){
        let trElem = document.createElement("tr");
        let tdNameElem = document.createElement("td");
        let tdCallElem = document.createElement("td");
        tdNameElem.innerHTML = this._foodName;
        tdCallElem.innerHTML = this._calories;
        trElem.append(tdNameElem);
        trElem.append(tdCallElem);
        return trElem;
    }
}

//create an array of foods
foods = [];
foods.push(new Food("Popcorn", 5));
foods.push(new Food("Cheese", 20));
foods.push(new Food("Butter", 45));
foods.push(new Food("Sprinkles", 10));

// for(let i = 0; i < foods.length; i++){

//     console.log(foods[i]);
// }

let totalCalories = 0;

let tableElem = document.createElement("table");
let contentDiv = document.getElementById("content");
contentDiv.append(tableElem);

for(food of foods){
    console.log(food.getFoodName());
    totalCalories += food.getCalories();

    tableElem.append(food.getTableRow());
}

console.log("Total Calories: " + totalCalories);
