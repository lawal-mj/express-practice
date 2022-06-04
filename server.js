const express = require('express')
const app = express()


app.get('/', function(req, res){
    res.send("Hello world New files")
})



app.listen(3000)