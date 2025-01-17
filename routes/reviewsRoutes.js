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

//add new review
router.post('/', async(req, res) => {
    try {
      const createdReview = await Reviews.create(req.body) 
      console.log(req.body)
      res.json(createdReview)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//edit review
router.put('/:id', async(req, res)=>{
  try {
    const updatedReview = await Reviews.findByIdAndUpdate(req.params.id, req.body)
    res.json(updatedReview)  
  } catch (error) {
      res.status(500).json({error: error.message})
  }
})

//delete review
router.delete('/:id', async (req, res)=>{
  try {
  const deletedReview = await Reviews.findByIdAndDelete(req.params.id);
  res.json(deletedReview);
  } catch (error) {
  res.status(500).json({error: error.message})
  }
})

module.exports = router