const express = require('express');
const User = require('./User')
const cors = require('cors');
require('./config');

const app = express();
app.use(express.json())
app.use(cors())

app.get('/', async(req,res)=>{
    let user =  await User.find()

    res.send(user)
})
app.post('/save', async(req,res)=>{
    let payload =  new User(req.body)
    let result = await payload.save()

    res.send(result)

})



app.listen(5000, ()=>{
    console.log('listening to 5000')
})