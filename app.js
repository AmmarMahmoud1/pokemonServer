const express = require('express');
const app = express();
const port = 5100;
const data = require('./data.json');
const cors = require('cors');

app.use(cors());

app.get('/', (req,res) =>{
    res.send('Hello from pokemonGO server');
});

app.get('/pokemon',(req,res) =>{
    res.send(data);
    console.log(data);
})

app.get('/pokemon/:id', (req,res) =>{
     const id = req.params.id;
    let pokemon = data.find(item => item.id = id );
    console.log(id);
    res.send(pokemon);
    
});

app.get('/pokemon/:id/:info', (req,res) =>{
    const id = req.params.id;
    let info = data.find(item => item.id= id);
    res.send(info.base);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


