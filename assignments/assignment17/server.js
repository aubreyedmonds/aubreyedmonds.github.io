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

//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
}); 