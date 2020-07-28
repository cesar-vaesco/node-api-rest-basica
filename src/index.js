const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings - configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('short')); //Formato de la respuesta
app.use(express.urlencoded({ extended: false })); //Datos que soporta la respuesta
app.use(express.json()); //Formato de la respuesta

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));

// Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor creado en el puerto ${app.get('port')}`);
});