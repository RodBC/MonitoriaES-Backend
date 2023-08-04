const { Router } = require('express');
const MovieController = require('./controllers/MovieController');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const routes = Router();

routes.get('/movies', jsonParser, MovieController.index);
routes.post('/movies', jsonParser, MovieController.store);
routes.patch('/movies', jsonParser, MovieController.update);
routes.delete('/movies', jsonParser, MovieController.destroy);
module.exports = routes