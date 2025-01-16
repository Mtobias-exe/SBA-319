const express = require('express')
const router = express.Router()
const Pastry = require('../model/pastry')

//get all pastries
router.get('/', async(req, res)=>{
    try {
        const allPastry = await Pastry.find({});
        res.json(allPastry);
    } catch (error) {
      res.status(500).json({error: error.message})  
    }
});

//add new pastry
router.post('/', async(req, res) => {
    try {
      const createdPastry = await Pastry.create(req.body) 
      console.log(req.body)
      res.json(createdPastry)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router