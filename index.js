const express = require('express');
const bodyParser = require('body-parser');
//constante de aplicacion de express
const app = express();
//puerto en el que corre el servidor
const port = 3000;
//constantes de routeo
const usersRouter = require('./routes/users');
const dataRouter = require('./routes/data')

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
});


//asignacion de ruta para la constante de routeo
app.use('/users', usersRouter);

app.use('/data', dataRouter);

/* Middleware que maneja los errores */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });

    return;
});

//ejecucion del servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});