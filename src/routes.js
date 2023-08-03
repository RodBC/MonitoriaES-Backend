const User = require('./models/Movies')
const { Router } = require('express');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const routes = Router();

routes.post('/movies', jsonParser, async (req,res) => {

    const {name, description, length} = req.body;

    const movie = await User.create({
        name,
        description,
        length
    });


    return res.json(movie)
})


module.exports = routes