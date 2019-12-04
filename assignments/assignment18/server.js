const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const pies = [
    {id:1, name:"Jingle Bells", singer:"Michael Buble", genre:"jazz" },
    {id:2, name:"All I want for Christmas is you", singer:"Miara Carrie", genre:"pop"},
    {id:3, name:"Rodulf the Red Nose Reinder", singer:"DMX", genre:"rap"},
    {id:4, name:"White Christmas", singer:"Elvis Prezley", genre:"rock"}
]

app.get('/api/pies', (req,res)=>{
    res.send(pies);
});

app.get('/api/pies/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const pie = pies.find(s =>s.id === requestedId);

    if(!pie) {
        res.status(404).send(`The pie with id ${requestedId} was not found`);
        return;
    }

    res.send(pie);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

function validatePie(pie){
    const schema = {
        name:Joi.string().min(3).required(),
        singer:Joi.string().min(4).required(),
        genre:Joi.string().required()
    }

    return Joi.validate(pie, schema);
}

app.post('/api/pies', (req,res)=>{
    const result = validatePie(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const pie = {
        id:pies.length + 1,
        name : req.body.name,
        singer : req.body.singer,
        genre : req.body.genre
    }
    console.log("name is: " + req.body.name);
    pies.push(pie);
    res.send(pie);
});

//update a pie
app.put('/api/pies/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const pie = pies.find(s =>s.id === requestedId);

    //no pie with matchin id in array
    if(!pie) {
        res.status(404).send(`The pie with id ${requestedId} was not found`);
        return;
    }

    //validating pie with schema
    const result = validatePie(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update
    pie.name = req.body.name;
    pie.singer = req.body.singer;
    pie.genre = req.body.genre;
    res.send(pie);

});

app.delete('/api/pies/:id',(req,res)=>{
    const requestedId = parseInt(req.params.id);
    const pie = pies.find(s =>s.id === requestedId);

    //no pie with matchin id in array
    if(!pie) {
        res.status(404).send(`The pie with id ${requestedId} was not found`);
        return;
    }

    //pie exists so I can go forward and delete it
    let index = pies.indexOf(pie);
    pies.splice(index,1);
    res.send(pie);
});


//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});