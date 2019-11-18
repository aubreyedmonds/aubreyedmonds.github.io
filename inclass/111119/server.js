const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

//we hardcoded these four items
const songs = [
    {id:1, name:"Jingle Bells", singer:"Michael Buble", genre:"jazz" },
    {id:2, name:"All I want for Christmas is you", singer:"Miara Carrie", genre:"pop"},
    {id:3, name:"Rodulf the Red Nose Reinder", singer:"DMX", genre:"rap"},
    {id:4, name:"White Christmas", singer:"Elvis Prezley", genre:"rock"}
]

//returns the array of songs
app.get('/api/songs', (req,res)=>{
    res.send(songs);
});

//gets the id from the url, finds the song in the array that matches it, if statement
app.get('/api/songs/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const song = songs.find(s =>s.id === requestedId);

    if(!song) {
        res.status(404).send(`The song with id ${requestedId} was not found`);
        return;
    }

    res.send(song);
});

//launch my index.html page
//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});


//give me a song object and i will make sure that the name singer and genre match the scheme and i will return true or false
function validateSong(song){
    const schema = {
        name:Joi.string().min(3).required(),
        singer:Joi.string().min(4).required(),
        genre:Joi.string().required()
    }

    return Joi.validate(song, schema);
}

//adding a song
//we validate what comes in through the body to make sure it matches the schema
//push to song array
app.post('/api/songs', (req,res)=>{
    const result = validateSong(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const song = {
        id:songs.length + 1,
        name : req.body.name,
        singer : req.body.singer,
        genre : req.body.genre
    }
    console.log("name is: " + req.body.name);
    songs.push(song);
    res.send(song);
});

//update a song
//we say pass me the id of the song and then we will update based on the body
//if statement
app.put('/api/songs/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const song = songs.find(s =>s.id === requestedId);

    //no song with matchin id in array
    if(!song) {
        res.status(404).send(`The song with id ${requestedId} was not found`);
        return;
    }

    //validating song with schema
    const result = validateSong(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update
    song.name = req.body.name;
    song.singer = req.body.singer;
    song.genre = req.body.genre;
    res.send(song);

});

//pass me an id through the url 
//find the song in the song array
//if statement
//find the song, remove from the array and send back
app.delete('/api/songs/:id',(req,res)=>{
    const requestedId = parseInt(req.params.id);
    const song = songs.find(s =>s.id === requestedId);

    //no song with matchin id in array
    if(!song) {
        res.status(404).send(`The song with id ${requestedId} was not found`);
        return;
    }

    //song exists so I can go forward and delete it
    let index = songs.indexOf(song);
    songs.splice(index,1);
    res.send(song);
});


//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});