"using strict"

async function displayMovie(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let movieJson = await response.json();
    let contentDiv = this.document.getElementById("movie-content");
    
    for (i in movieJson){
        let movie = movieJson[i];
        contentDiv.append(getMovie(movie));
    }
}