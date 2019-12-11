"using strict"

async function displayBrewery(){
    let response = await fetch("https://api.openbrewerydb.org/breweries");
    let breweryJson = await response.json();
    let contentDiv = this.document.getElementById("content");

    for (i in breweryJson){
        let brewery = breweryJson[i];
        contentDiv.append(getBrewery(brewery));
    }
}

function getBrewery(brewery){
    let brewerySectionElem = document.createElement("section");
    brewerySectionElem.className = "brewery-section";
    
    let breweryTitle = document.createElement("h3");
    breweryTitle.innerHTML = brewery.name;
    brewerySectionElem.append(breweryTitle);

    brewerySectionElem.append(addPara("Brewery Type:" + brewery.brewery_type));
    brewerySectionElem.append(addPara(`Address: ${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code} ${brewery.country}`));
    brewerySectionElem.append(addPara("Longitude:" + brewery.longitude));
    brewerySectionElem.append(addPara("Latitude" + brewery.latitude));
    brewerySectionElem.append(addPara("Phone: " + brewery.phone));
    brewerySectionElem.append(addURL(brewery.website_url));
    brewerySectionElem.append(addPara("Updated:" + brewery.updated_at));

    return brewerySectionElem;
}

function addPara(text){
    let paraElem = document.createElement("p");
    paraElem.innerText = text;
    return paraElem;

}

function addURL(url){
    let urlElem = document.createElement("a");
    urlElem.innerText = "Website Link";
    urlElem.href = url;
    return urlElem;
}

window.onload = function(){
    this.displayBrewery();
}

//array
//Genre
let genreLiElem = document.createElement("li");
let genreString = "<b>Genres: </b>";
for (i in movie.genres){
    if ( i != 0){
        genreString += ", " + movie.genres[i];
    } else {
        genreString += movie.genres[i];
    }
}
genreLiElem.innerHTML = genreString;
ulElem.append(genreLiElem);

//CSS
*{
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body{
    background: #333333;
}

#content{
    background: #3399FF;
    width: 60%;
    align-items: center;
    margin:auto;
    padding: 25px;
}

.brewery-section{
    background: #2778C7;
    padding: 5px;
    margin: 20px;
    box-shadow: 5px 15px 5px 0px #000;
}

//hide and show details
<button id="add-pie-btn">+</button>

.hidden{
    display: none;
  }

  function toggleAddForm(){
    console.log("testing toggle");
    let addForm = document.getElementById("add-pie-form");
    addForm.classList.toggle("hidden");
}

//in window.onload
const addForm = document.getElementById("add-pie-form");
    addForm.hidden = false;
    const addButton = document.getElementById("add-pie-btn");
    addButton.onclick = toggleAddForm;

//images
//goes into getBrewery
movieSectionElem.append(addImg(movie.img));
//addImg function
function addImg(path){
    const basePath = "https://portiaportia.github.io/csce242/json/";
    let fullPath = basePath + path;
    let imgElem = document.createElement("img");
    imgElem.src = fullPath;
    return imgElem;
}
