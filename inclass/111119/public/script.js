console.log("loading our script");

async function showSongs(){
    let songsJson = await fetch('api/songs');
    let songs = await songsJson.json();
    let songsDiv = document.getElementById("songs");
    console.log(songs);

    for(i in songs){
        songsDiv.append(getSongElem(songs[i]));
    }
}

function getSongElem(song){
    let songDiv = document.createElement("div");
    songDiv.classList.add("song");
    let songTitle = document.createElement("h3");
    songTitle.innerHTML = song.id + ": " + song.name;

    let songP = document.createElement("p");
    songP.innerHTML = `by ${song.singer}, genre being ${song.genre}`;

    songDiv.append(songTitle);
    songDiv.append(songP);

    return songDiv;
}

window.onload = function(){
    this.showSongs();
}