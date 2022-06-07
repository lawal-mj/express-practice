const express = require('express')
const app = express()
app.set("view engine", "ejs")

const taskRouter = require('./routes/tasks')
const userRouter = require('./routes/users')


app.use('/tasks', taskRouter)
app.use('/users', userRouter)


// home route 
app.get('/', function(req, res){
    res.render('index')
})


app.listen(3000)

