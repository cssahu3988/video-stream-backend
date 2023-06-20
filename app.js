const express = require('express');
const app = express();
app.use(express.json());

app.get('/',async(req,res)=>{
    res.status(200).send({"msj":"Hello from the server"})
})

app.listen('3000',()=>{
    console.log('listening on http://localhost:3000');
})