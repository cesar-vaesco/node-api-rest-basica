const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res, next) => {
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const id = movies.length + 1;
        //De existir el objeto se guarda primero antes de insertarlo al arreglo
        const newMovie = { id, ...req.body };
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({ "respuesta": "Petición erronea" });
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    // Comprobar que los datos que se quieren actualizar existen
    if (title && director && year && rating) {
        // Recorrer el arreglo de peliculas
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({ error: "Invalid" });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    })
    res.send(movies);
})

module.exports = router;