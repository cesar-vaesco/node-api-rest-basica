const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async(req, res) => {
    // Se hace petición a esta dirección
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    res.send('Users');
});

module.exports = router;