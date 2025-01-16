const mongoose = require('mongoose')

const pastrySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    imageUrl:{
        type: String,
        required: false
    }
})

const Pastry = mongoose.model('Pastry', pastrySchema);

module.exports = Pastry;