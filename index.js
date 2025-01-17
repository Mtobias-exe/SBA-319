require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000 
const conn = require('./db/conn')
const starterPastry = require('./db/data')
const Pastry = require('./model/pastry')
const pastryRoutes = require('./routes/pastryRoutes')

const starterUsers = require('./db/users')
const Users = require('./model/usersModel')
const usersRoutes = require('./routes/usersRoutes')

const starterReviews = require('./db/reviews')
const Reviews = require('./model/reviewsModel')
const reviewsRoutes = require('./routes/reviewsRoutes')


conn()
app.use(express.json())
app.use('/api/pastries', pastryRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/reviews', reviewsRoutes)




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

//user route
app.get('/users/data', async (req, res) => {
    try {
        await Users.deleteMany({})
        await Users.create(starterUsers)
        res.json(starterUsers)
    } catch (error) {
        console.log(`Something went wrong loading user data: ${error.message}`)
    }
})

//review route
app.get('/reviews/data', async (req, res) => {
    try {
        await Reviews.deleteMany({})
        await Reviews.create(starterReviews)
        res.json(starterReviews)
    } catch (error) {
        console.log(`Something went wrong loading reviews data: ${error.message}`)
    }
})


app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})