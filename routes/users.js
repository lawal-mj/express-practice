const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("<h1>THis is the Users Home page</h1>")
})

router.get('/new', (req, res)=>{
    res.send("<h1>NEW PAGE</h1>")
})

module.exports = router



