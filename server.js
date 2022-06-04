const express = require('express')
const app = express()
app.set("view engine", "ejs")
const data = require("./data")

app.get('/', function(req, res){
    res.render('index', data[2])
})





app.listen(3000)