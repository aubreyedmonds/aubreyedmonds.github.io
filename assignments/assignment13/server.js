const express = require('express');
const app = express();
const nascar = require('./nascar');
//allows us to access js/css/images if in a public directory
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");

});

app.get('/api/nascar', (req,res)=>{
    res.send(nascar);
});

//make port number dynamic
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`listening on port ${port}...`)
}); 