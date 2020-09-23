const express = require('express')
const router = express.Router()

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get('/',(req,res) =>{
    res.send('Welcome user sidd')
})

router.get('/:userName/year/:currentYear',(req,res,next)=>{
    console.log(`Welcome ${req.params.userName}`)
    next()
},(req,res)=>{res.json("ceasor")})

module.exports = router