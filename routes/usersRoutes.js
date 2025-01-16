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






module.exports = router