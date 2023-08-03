const Movies = require('../models/Movies');

// index, show, store, udpate, destroy
module.exports = {

    async index(req, res){
        const movies = await Movies.find();
        return res.json(movies)
    },

    

    async store(req, res) {
        const {name, description, length} = req.body;

        let movie = await Movies.findOne({name});

        if (!movie){
            const movie = await Movies.create({
                name,
                description,
                length
            });
            return res.json(movie)
        }else {
            return res.json("esse filme ja existe!")
        }
    }
}