const express = require('express')
const app = express()
const data = require("./data")

app.set("view engine", "ejs")


app.get('/', function(req, res){
    res.render('index', {name:"lawal"})
})





app.listen(3000)