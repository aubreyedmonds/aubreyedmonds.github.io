const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pies', {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=> console.log("Connected to mongodb..."))
.catch((err => console.error("could not connect to mongo...", err)));

const pieSchema = new mongoose.Schema({
    holiday:String,
    crust:String,
    flavor:String,
    filling:Number,
    topping:String,
    slices:[String]
});

const Pie = mongoose.model('Pie', pieSchema);

async function createPie(pie){
    const result = await pie.save();
    console.log(result);
}

function validatePie(pie){
    const schema = {
        holiday:Joi.string().min(1).required(),
        crust:Joi.string().min(1).required(),
        flavor:Joi.string().min(1).required(),
        filling:Joi.number(),
        topping:Joi.string(),
        slices:Joi.allow()
    };

    return Joi.validate(pie, schema);
}

app.post('/api/pies', (req,res)=>{
    const result = validatePie(req.body);

    if(result.error){
        res.status(400).send(result.err.details[0].message);
        return;
    }

    const pie = new Pie({
        holiday:req.body.holiday,
        crust:req.body.crust,
        flavor:req.body.flavor,
        filling:req.body.filling,
        topping:req.body.topping,
        slices:req.body.slices
    });

    createPie(pie);
    res.send(pie);

});

async function getPies(res){
    const pies = await Pie.find();
    console.log(pies);
    res.send(pies);
}

app.get('/api/pies',(req,res)=>{
    const pies = getPies(res);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
}); 