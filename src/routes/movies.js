const { Router } = require('express');
const router = Router();
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
        res.send('Petición erronea');
    }

})

module.exports = router;