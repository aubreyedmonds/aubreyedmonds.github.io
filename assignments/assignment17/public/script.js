async function showPies(){
    let piesJson = await fetch('api/pies');
    let pies = await piesJson.json();
    let piesDiv = document.getElementById("pies");

    for(i in pies){
        piesDiv.append(getPieElem(pies[i]));
    }
}

function getPieElem(pie){
    let piesDiv = document.createElement("div");
    piesDiv.classList.add("pie");
    let pieTitle = document.createElement("h3");
    pieTitle.innerHTML = pie.crust;

    let pieP = document.createElement("ul");
    let pieHoliday = document.createElement("li");
    let pieCrust = document.createElement("li");
    let pieFlavor = document.createElement("li");
    let pieFilling = document.createElement("li");
    let pieTopping = document.createElement("li");
    let pieSlices = document.createElement("li");

    pieHoliday.innerHTML = "Holiday Asssociated With: " + pie.holiday;
    pieCrust.innerHTML = "Crust: " + pie.crust;
    pieFlavor.innerHTML = "Flavor: " + pie.flavor;
    pieFilling.innerHTML = "Filling: " + pie.filling;
    pieTopping.innerHTML = "Topping: " + pie.topping;
    pieSlices.innerHTML = "Slices: " + pie.slices;
        
    pieP.append(pieHoliday);
    pieP.append(pieCrust);
    pieP.append(pieFlavor);
    pieP.append(pieFilling);
    pieP.append(pieTopping);
    pieP.append(pieSlices);
    
    return piesDiv;
}

async function addPie(){
    console.log("in addPie");
    const holiday = document.getElementById("holiday-input").value;
    const crust = document.getElementById("crust-input").value;
    const flavor = document.getElementById("flavor-input").value;
    const filling = document.getElementById("filling-input").value;
    const topping = document.getElementById("topping-input").value;
    const slices = document.getElementById("slices-input").value;

    let pie = {"Holiday": holiday, "Crust":crust, "Flavor":flavor, "Filling":filling, "Topping":topping, "Slices":slices}
    console.log(pie);

    let response = await fetch('/api/pies/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(pie),
    });

    if(response.status != 200){
        feedbackP.innerHTML = "Error Adding Pie";
        feedbackP.classList.add("error");
        await delay(3000);
        feedbackP.remove();
        return;
    }

    let result = await response.json();
    feedbackP.innerHTML = "Successfully Added Pie";
    feedbackP.classList.add("success");
    showPies();

    await delay(3000);
    feedbackP.remove();
}

window.onload = function(){
    this.showPies();
    const addButton = this.document.getElementById("add-pie-btn");
    addButton.onclick = this.addPie;
}