const express = require('express');

const app = express();

app.use('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
})