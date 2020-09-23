const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app = express()
var birds = require('./routes/birds')
var user = require('./routes/user')
var admin = require('./routes/admin')
const port = 3000

app.use(bodyparser.json())

app.use('/birds',birds)
app.use('/user',user)
app.use('/admin',admin)

app.get('/',(req,res) =>{
    res.send('I am coming')
})



mongoose.connect('mongodb+srv://###/tracker?retryWrites=true&w=majority', {useNewUrlParser: true},{ useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected !!')
});

const kittySchema = new mongoose.Schema({
  name : String
})
const Kitten = mongoose.model('Kitten', kittySchema);











app.listen(port, ()=>{
    console.log(`app is listening @ localhost:${port}`)
})
