const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("<h1>This is the main tasks page</h1>")
})

router.get('/new', (req, res)=>{
    res.send("<h1>NEW TASKS</h1>")
})

router.get('/new/:taskID', (req, res)=>{
        res.send(`<h1>This is new TASK ${req.params.taskID}</h1>`)
})

module.exports = router

