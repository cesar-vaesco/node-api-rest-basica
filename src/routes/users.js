const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async(req, res) => {
    // Se hace petición a esta dirección
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
});

module.exports = router;