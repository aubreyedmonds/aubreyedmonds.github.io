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

    let songDiv = document.getElementById("pie");
    songDiv.append(getPieElem(pie));
}

function getPieElem(pie){
    let songDiv = document.createElement("div");
    songDiv.classList.add("pie");
    let songTitle = document.createElement("h3");
    songTitle.innerHTML = pie.id + ": " + pie.name;

    let songP = document.createElement("p");
    songP.innerHTML = `by ${pie.singer}, genre ${pie.genre}`;

    //create edit and delete links
    let editLink = document.createElement("a");
    editLink.href = "#edit-pie-form";
    editLink.innerHTML = "Edit";
    editLink.setAttribute("data-id", pie.id);
    editLink.onclick =showEditPie;
    let deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.innerHTML = "Delete";
    deleteLink.setAttribute("data-id", pie.id);
    deleteLink.onclick = deletePie;
    songP.append(editLink);
    songP.append(deleteLink);

    songDiv.append(songTitle);
    songDiv.append(songP);
    
    return songDiv;
}

async function showEditPie(){
    const id = this.getAttribute("data-id");
    document.getElementById("edit-pie-id").innerHTML = id;

    let response = await fetch(`api/pies/${id}`);
    let pie = await response.json();
    document.getElementById("txt-edit-pie-name").value = pie.name;
    document.getElementById("txt-edit-pie-singer").value = pie.singer;
    document.getElementById("txt-edit-pie-genre").value = pie.genre;

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
    //get the pie inforamtion
    console.log("here")
    const pieName = document.getElementById("txt-new-pie-name").value;
    const pieSinger = document.getElementById("txt-new-pie-singer").value;
    const pieGenre = document.getElementById("txt-new-pie-genre").value;
    
    let pie = {"name": pieName, "singer": pieSinger, "genre": pieGenre}; 

    let response = await fetch('/api/pies/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(pie),
    });

    if(response.status != 200){
        console.log("Error adding pie");
        return;
    }

    let result = await response.json();
    showPies();
}

// async function addPie(){
//     //get the pie information
//     const songName = document.getElementById("txt-new-pie-name").value;
//     const songSinger = document.getElementById("txt-new-pie-singer").value;
//     const songGenre = document.getElementById("txt-new-pie-genre").value;

//     console.log(`you are adding ${songName}, ${songSinger}, ${songGenre}`);

//     let pie = {"name": songName, "singer":songSinger, "genre":songGenre};

//     let response = await fetch('/api/pies/', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         },
//         body: JSON.stringify(pie),
//     });

//     if(response.status != 200){
//         console.log("Error adding pie");
//         return;
//     }

//     let result = await response.json();
//     showPies();
// }

async function editPie(){
    let id = document.getElementById("edit-pie-id").textContent;
    let name = document.getElementById("txt-edit-pie-name").value;
    let singer = document.getElementById("txt-edit-pie-singer").value;
    let genre = document.getElementById("txt-edit-pie-genre").value;
    let pie = {"name":name, "singer": singer, "genre": genre};

    let response = await fetch(`/api/pies/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(pie),
    });

    if(response.status != 200){
        console.log("Error edditing pie");
    }

    //update the pie list
    showPies();
}

window.onload = function(){
    this.showPies();
    let showPieButton = document.getElementById("btn-show-pie");
    showPieButton.onclick = showPie;

    let addPieButton = document.getElementById("btn-add-pie");
    addPieButton.onclick = addPie;

    let editPieButton = document.getElementById("btn-edit-pie");
    editPieButton.onclick = editPie;
}