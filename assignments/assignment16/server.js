const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const pies = [
    {id:1, crust: "graham cracker", flavor: "key lime", topping: "whip cream", filling: "cream"},
    {id:2, crust: "flour", flavor: "chocolate", topping: "pecans", filling: "pudding"},
    {id:3, crust: "oreo cookie", flavor: "vanilla", topping: "cherries", filling: "custard"},
    {id:4, crust: "butter", flavor: "blueberry", topping: "sugar", filling: "fruit",},
    {id:5, crust: "puff pastry", flavor: "bacon and egg", topping: "chives", filling: "quiche",},
    {id:6, crust: "filo pastry", flavor: "salt and pepper", topping: "meat", filling: "savory",},
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


//give me a pie object and i will make sure that it matches the scheme and i will return true or false
function validatePie(pie){
    const schema = {
        crust:Joi.string().min(3).required(),
        flavor:Joi.string().min(4).required(),
        filling:Joi.string().min(3).required(),
        topping:Joi.string().min(3).required(),
    }

    return Joi.validate(pie, schema);
}

//adding a pie
//we validate what comes in through the body to make sure it matches the schema
//push to pie array
app.post('/api/pies', (req,res)=>{
    const result = validatePie(req.body);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const pie = {
        id:pies.length + 1,
        crust : req.body.crust,
        flavor : req.body.flavor,
        filling : req.body.filling,
        topping : req.body.topping
    }
    console.log("name is: " + req.body.crust);
    pies.push(pie);
    res.send(pie);
});

//update a pie
//we say pass me the id of the pie and then we will update based on the body
//if statement
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
    pie.crust = req.body.crust;
    pie.flavor = req.body.flavor;
    pie.filling = req.body.filling;
    pie.topping = req.body.topping;
    res.send(pie);

});

//pass me an id through the url 
//find the pie in the pie array
//if statement
//find the pie, remove from the array and send back
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