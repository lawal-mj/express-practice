const express = require('express')
const app = express()
app.set("view engine", "ejs")

app.use(express.static("public"))


// const taskRouter = require('./routes/tasks')
// const userRouter = require('./routes/users')

// app.use('/tasks', taskRouter)
// app.use('/users', userRouter)


// // home route 
// app.get('/', function(req, res){
//     res.render('index')
// })

app.get('/pages', (req, res)=>{
    res.sendFile('pages.html')
})


app.listen(3000)

