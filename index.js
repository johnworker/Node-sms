const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.post('/')

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
})