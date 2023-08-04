const Movies = require('../models/Movies');

// index, show, store, udpate, destroy
module.exports = {

    async index(req, res){
        const movies = await Movies.find();
        return res.json(movies)
    },

    async update(req, res){
        const {name, description, length} = req.body;
        const movie = await Movies.updateOne({name}, {
            $set: {
                description,
                length
            }
        });
        return res.json(movie)
    },

    async destroy(req, res){
        const {name} = req.body;
        const movie = await Movies.deleteOne({name});
        return res.json(movie)
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