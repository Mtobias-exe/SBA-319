const express = require('express')
const router = express.Router()
const Users = require('../model/usersModel')

//get all users
router.get('/', async(req, res)=>{
    try {
        const allUsers = await Users.find({});
        res.json(allUsers);
    } catch (error) {
      res.status(500).json({error: error.message})  
    }
});

//add new User
router.post('/', async(req, res) => {
  try {
    const createdUser = await Users.create(req.body) 
    console.log(req.body)
    res.json(createdUser)
  } catch (error) {
      res.status(500).json({error: error.message})
  }
})

//edit existing user
router.put('/:id', async(req, res)=>{
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body)
    res.json(updatedUser)  
  } catch (error) {
      res.status(500).json({error: error.message})
  }
})

//find 1 user
router.get('/:id', async (req, res)=>{
  try {
   const singleUser = await Users.findById(req.params.id)   
   res.json(singleUser)
  } catch (error) {
      res.status(500).json({error: error.message})
  }
})


//delete user
router.delete('/:id', async (req, res)=>{
  try {
  const deletedUser = await Users.findByIdAndDelete(req.params.id);
  res.json(deletedUser);
  } catch (error) {
  res.status(500).json({error: error.message})
  }
})


module.exports = router