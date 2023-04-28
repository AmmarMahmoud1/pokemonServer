require('dotenv').config()
const express = require('express');
const app = express();
const port = 5100 || process.env.PORT;
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
     console.log(typeof id);
    let pokemon =  data[Number(id)-1];
    console.log(pokemon);
    res.send(pokemon);
    
});

app.get('/pokemon/:id/:info', (req,res) =>{
    const id = req.params.id;
    let info = data[Number(id)-1];
    res.send(info);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


