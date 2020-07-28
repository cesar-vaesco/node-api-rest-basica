const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "nombre": "César Vargas Escorcia",
        "git-perfil": "cesar-vaesco"
    }
    res.json(data);
});

module.exports = router;