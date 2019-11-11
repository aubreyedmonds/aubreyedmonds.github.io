const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const songs = [
    {id:1, name:"Jingle Bells", singer:"Michael Buble", genre:"jazz"},
    {id:2, name:"All I Want For Christmas Is You", singer:"Mariah Carey", genre:"jazz"},
    {id:3, name:"Rudolph The Rednose Reindeer", singer:"DMX", genre:"rap"},
    {id:4, name:"White Christmas", singer:"Elvis Presley", genre:"rock"}
]

app.get('/api/songs', (req, res)=>{
    res.send(songs);
});

app.get('/api/songs/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const song = songs.find(s =>s.id === requestedId);

    if(!song){
        res.status(404).send(`The song with id ${requestedId} was not found`);
        return;
    }
    res.send(song);
});


//render out html page
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

//make port number dynamic
const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`listening on port ${port}...`)
}); 