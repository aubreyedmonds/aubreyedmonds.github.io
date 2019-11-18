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
        res.status(404).send(`The song with id ${requestedId} was not found`);
        return;
    }

    res.send(pie);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/pies', (req,res)=>{
    const schema = {
        crust:Joi.string().min(3).required(),
        flavor:Joi.string().min(4).required(),
        topping:Joi.string().required(),
        filling:Joi.string().required()
    }

    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const pie = {
        id:pies.length + 1,
        crust : req.body.crust,
        flavor : req.body.flavor,
        topping : req.body.topping,
        filling: req.body.filling
    }
    console.log("Pie crust is: " + req.body.crust);
    pies.push(pie);
    res.send(pie);
});

//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
