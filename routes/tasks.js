const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("This is the main tasks page")
})

router.get('/new', (req, res)=>{
    res.send("NEW TASKS")
})

router.get('/new/:userID', (req, res)=>{
        res.send("THIS IS USER NUMBER " + req.params.userID)
})

module.exports = router

