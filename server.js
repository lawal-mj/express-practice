const express = require('express');
const app = express()
const path = require('path')

app.use(express.static('public'))

app.get('/', function(req, res){
    res.send("This is the home route")
})





app.listen(3000, ()=>{
    console.log("Server started")
})