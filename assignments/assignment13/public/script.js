async function showDrivers(){
    console.log("testing");
    let response = await fetch("/api/nascar");
    let nascarJson = await response.json();
    console.log(nascarJson);

    let contentDiv = document.getElementById("content");
    let cars;

    for(i in nascarJson){
        cars = nascarJson[i];
    }

    for(i in cars){
        console.log(cars[i]);
        contentDiv.append(makeDriverElem(cars[i]));

    }
}

function makeDriverElem(driver){
    const driverElem = document.createElement("div");
    driverElem.classList.add("driver");
    driverH2 = document.createElement("h2");
    driverH2.innerHTML = driver.name;
    driverElem.append(driverH2);
    driverP = document.createElement("p");
    driverP.innerHTML = `has ${driver.number} as their number, ${driver.wins} wins, ${driver.polls} polls, ${driver.top_tens} Top Tens, ${driver.championships} Championships, ${driver.career_starts} Career Starts, and is from ${driver.hometown}`;
    driverElem.append(driverP); 
    // driverPp = document.createElement("img");
    // driverPp.innerHTML = ``
    return driverElem;
}

window.onload = function(){
    this.showDrivers();
}