const express = require('express')
const app = express()
app.set("view engine", "ejs")
const data = require("./data")

const taskRouter = require('./routes/tasks')
app.use('/tasks', taskRouter)

app.get('/', function(req, res){
    res.render('index', data[2])
})





app.listen(3000)