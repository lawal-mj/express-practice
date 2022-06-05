const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("<h1>THis is the Users Home page</h1>")
})

router.get('/new', (req, res)=>{
    res.send("<h1>NEW PAGE</h1>")
})

module.exports = router



// route_path: '/user/:userId/book/:bookId'
// actual_request_URL: '/user/546/book/6754'
// req.params: {userId: '546', bookId: '6754'}