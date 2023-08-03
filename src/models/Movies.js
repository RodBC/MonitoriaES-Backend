const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: String,
    description: String,
    district: String,
})

module.exports = mongoose.model('Movies',MovieSchema);