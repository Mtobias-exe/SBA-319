const mongoose = require('mongoose')

const reviewsSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },

    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },

    comment:{
        type: String,
        required: true
    },

    datePosted:{
        type: Date,
        required: true
    }
})

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;