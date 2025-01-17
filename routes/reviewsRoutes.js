const express = require('express')
const router = express.Router()
const Reviews = require('../model/reviewsModel');


//get all reviews
router.get('/', async(req, res)=>{
    try {
        const allReviews = await Reviews.find({});
        res.json(allReviews);
    } catch (error) {
      res.status(500).json({error: error.message})  
    }
});

module.exports = router