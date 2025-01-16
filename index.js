require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000 
const conn = require('./db/conn')

conn()



app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})