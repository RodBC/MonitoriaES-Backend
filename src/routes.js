const { Router } = require('express');
const MovieController = require('./controllers/MovieController');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const routes = Router();

routes.get('/movies', jsonParser, MovieController.index);
routes.post('/movies', jsonParser, MovieController.store)


module.exports = routes