const request = require('supertest');
const app = require('../index');

describe('Test my app', () => {

  //GET
  test('should get all movies', async () => {
    const response = await request(app).get('/api/movies')

    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(Array.isArray(response.body.data.movies)).toBe(true);
  });

  //POST
  test('should create a new movie', async () => {
    const newMovie = {
      movieName: 'Test Movie 1',
      movieRating: 8.5,
      releaseDate: '2023-01-01', 
      directorName: 'Test Director',
    };

    const res = await request(app).post('/api/movies').send(newMovie);

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('Ok');
  }); 

  //PACTH
  test('should update a movie', async () => {
    // Primeiro, criando um filme para atualizar
    const newMovie = {
      movieName: 'Test Movie 2',
      movieRating: 7.5,
      releaseDate: '2023-02-15', 
      directorName: 'Test Director',
    };

    const createResponse = await request(app).post('/api/movies').send(newMovie);
    expect(createResponse.status).toBe(201);
    expect(createResponse.body.status).toBe('Ok');

    // Em seguida, atualizando o filme criado
    const movieId = createResponse.body.data.movie._id;

    const updatedMovie = {
      movieName: 'Updated Movie Paia',
      movieRating: 9.0,
    };

    const updateResponse = await request(app).patch(`/api/movies/${movieId}`).send(updatedMovie);

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.status).toBe('Ok');
  });

  //DELETE
  test('should delete a movie', async () => {
    // Primeiro, criando um filme para deletar
    const newMovie = {
      movieName: 'Test Movie 3',
      movieRating: 6.0,
      releaseDate: '2023-03-20', 
      directorName: 'Test Director',
    };

    const createResponse = await request(app).post('/api/movies').send(newMovie);
    expect(createResponse.status).toBe(201);
    expect(createResponse.body.status).toBe('Ok');

    // Em seguida, delete o filme criado
    const movieId = createResponse.body.data.movie._id;

    const deleteResponse = await request(app).delete(`/api/movies/${movieId}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body.status).toBe('Ok');
  });

});





