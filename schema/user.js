const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
    },
    bookings: []
})

module.exports = mongoose.model('user', userSchema)