async function showPies(){
    let piesJson = await fetch('api/pies');
    let pies = await piesJson.json();
    let piesDiv = document.getElementById("pies");
    piesDiv.innerHTML = "";

    for(i in pies){
        piesDiv.append(getPieElem(pies[i]));
    }
}

async function showPie(){
    let id = document.getElementById("txt-pie-id").value;
    let response = await fetch(`api/pies/${id}`);
    let pie = await response.json();

    let piesDiv = document.getElementById("pie");
    piesDiv.append(getPieElem(pie));
}

function getPieElem(pie){
    let piesDiv = document.createElement("div");
    piesDiv.classList.add("pie");
    let pieTitle = document.createElement("h3");
    pieTitle.innerHTML = pie.id + ": " + pie.crust;

    let pieP = document.createElement("p");
    pieP.innerHTML = `has the flavor ${pie.flavor}! It is filled with ${pie.filling}, and then topped with scrumptious ${pie.topping}`;

    piesDiv.append(pieTitle);
    piesDiv.append(pieP);
    
    return piesDiv;
}

async function addPie(){
    //get the song inforamtion
    const pieCrust = document.getElementById("txt-new-pie-crust").value;
    const pieFlavor = document.getElementById("txt-new-pie-flavor").value;
    const pieFilling = document.getElementById("txt-new-pie-filling").value;
    const pieTopping = document.getElementById("txt-new-pie-topping").value;

    console.log(`you are adding ${pieCrust}, ${pieFilling}, ${pieFlavor}, ${pieTopping}`);

    let pie = {"crust": pieCrust, "flavor":pieFlavor, "filling":pieFilling, "topping":pieTopping};

    let response = await fetch('/api/pies/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(pie),
    });

    if(response != 200){
        console.log("Oh no shnuckums! Error baking a pie!");
        return;
    }

    let result = await response.json();
    showPies();
}

window.onload = function(){
    this.showPies();
    let showPieButton = document.getElementById("btn-show-pie");
    showPieButton.onclick = this.showPie;

    let addPieButton = document.getElementById("btn-add-pie");
    addPieButton.onclick = this.addPie;
}