const express = require('express')
const app = express()
const data = require("./data")
app.set("view engine", "ejs")

const taskRouter = require('./routes/tasks')
const userRouter = require('./routes/users')


app.use('/tasks', taskRouter)
app.use('/users', userRouter)


// home route 
app.get('/', function(req, res){
    res.render('index', data[2])
})


app.listen(3000)