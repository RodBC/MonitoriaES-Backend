const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: String,
    description: String,
    length: String,
})

module.exports = mongoose.model('Movies',MovieSchema);