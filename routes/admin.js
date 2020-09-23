const express = require('express')
const router = express.Router()

router.route('/')
.get((req,res) =>{
    res.send('Welcome user admin')
})
.post((req,res) =>{
    res.send("Got a POST Request")
    console.log(req.body)
})

module.exports = router