function toggleAddForm(){
    console.log("testing toggle");
    let addForm = document.getElementById("add-pie-form");
    addForm.classList.toggle("hidden");

}

async function showPies(){
    let piesJson = await fetch('api/pies');
    let pies = await piesJson.json();
    let piesDiv = document.getElementById("pies");
    piesDiv.innerHTML = "";

    // for css styles
    piesDiv.className = "pies-div";

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

    //create edit and delete links
    let editLink = document.createElement("a");
    editLink.href = "#edit-pie-form";
    editLink.innerHTML = " Edit ";
    editLink.setAttribute("data-id", pie.id);
    editLink.onclick = showEditPie;
    let deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.innerHTML = "Delete";
    deleteLink.setAttribute("data-id", pie.id);
    deleteLink.onclick = deletePie;
    pieP.append(editLink);
    pieP.append(deleteLink);

    piesDiv.append(pieTitle);
    piesDiv.append(pieP);
    
    return piesDiv;
}

async function showEditPie(){
    const id = this.getAttribute("data-id");
    document.getElementById("edit-pie-id").innerHTML = id;

    let response = await fetch(`api/pies/${id}`);
    let pie = await response.json();
    document.getElementById("txt-edit-pie-crust").value = pie.crust;
    document.getElementById("txt-edit-pie-flavor").value = pie.flavor;
    document.getElementById("txt-edit-pie-filling").value = pie.filling;
    document.getElementById("txt-edit-pie-topping").value = pie.topping;

    return false;
}

async function deletePie(){
    const id = this.getAttribute("data-id");
    
    let response = await fetch(`/api/pies/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if(response.status != 200){
        console.log("Error adding pie");
        return;
    }

    showPies();
    return false;
}

async function addPie(){
    //get the pie information
    const pieCrust = document.getElementById("txt-new-pie-crust").value;
    const pieFlavor = document.getElementById("txt-new-pie-flavor").value;
    const pieFilling = document.getElementById("txt-new-pie-filling").value;
    const pieTopping = document.getElementById("txt-new-pie-topping").value;

    console.log(`you are adding ${pieCrust}, ${pieFilling}, ${pieFlavor}, ${pieTopping}`);

    let pie = {"crust": pieCrust, "flavor": pieFlavor, "filling": pieFilling, "topping": pieTopping};

    let response = await fetch('/api/pies/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(pie),
    });

    if(response.status != 200){
        console.log("Oh no shnuckums! Error baking a pie!");
        return;
    }

    let result = await response.json();
    showPies();
}

async function editPie(){
    // let id = document.getElementById("txt-edit-pie-id").textContent;
    let crust = document.getElementById("txt-edit-pie-crust").value;
    let flavor = document.getElementById("txt-edit-pie-flavor").value;
    let filling = document.getElementById("txt-edit-pie-filling").value;
    let topping = document.getElementById("txt-edit-pie-topping").value;

    let pie = {"Crust":crust, "flavor": flavor, "filling": filling, "topping": topping};
        console.log(pie);
    
        let response = await fetch(`/api/pies/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(pie),
    });

    if(response.status != 200){
        console.log("Error editing pie");
    }
    //update the pie list
    let result = await response.json();
    showPies();
}

window.onload = function(){
    this.showPies();

    const addForm = document.getElementById("add-pie-form");
    addForm.hidden = false;
    const addButton = document.getElementById("add-pie-btn");
    addButton.onclick = toggleAddForm;

    let showPieButton = document.getElementById("btn-show-pie");
    showPieButton.onclick = this.showPie;

    let addPieButton = document.getElementById("btn-add-pie");
    addPieButton.onclick = this.addPie;

    let editPieButton = document.getElementById("btn-edit-pie");
    editPieButton.onclick = editPie;
}
