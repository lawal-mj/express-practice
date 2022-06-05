const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("<h1>This is the Users home page</h1>")
})

router.get('/new', (req, res)=>{
    res.send("<h1>NEW USERS PAGE</h1>")
})

router.get('/new/:userID', (req, res)=>{
    res.send(`<h1>THis is USER number ${req.params.userID}</h1>`)
})

module.exports = router



// route_path: '/user/:userId/book/:bookId'
// actual_request_URL: '/user/546/book/6754'
// req.params: {userId: '546', bookId: '6754'}

