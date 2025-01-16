require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000 
const conn = require('./db/conn')
const starterPastry = require('./db/data')
const Pastry = require('./model/pastry')
conn()



//home route
app.get('/', (req, res)=>{
    res.send('Home Page')
})

//data route
app.get('/pastry/data', async (req, res) => {
    try {
        await Pastry.deleteMany({})
        await Pastry.create(starterPastry)
        res.json(starterPastry)
    } catch (error) {
        console.log(`Something went wrong loading pastry data: ${error.message}`)
    }
})

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})