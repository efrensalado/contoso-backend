const express = require('express');
const router = express.Router();
const users = require('../services/users');

/* 
* Asignacion de routeo para la constante de routeo
* la cual se encarga de realizar acciones que se 
* encuentran declaradas en ./services/users
*/
router.get('/', async function (req, res, next) {
    try {
        res.json(await users.getAllUsers(req.query.page));
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        res.json(await users.newUser(req.body))
    } catch (error) {
        console.log("Error creating user", error.message);
        next(error);
    }
});

router.get('/:username', async function (req, res, next) {
    try {
        res.json(await users.login(req.params.username))
    } catch (error) {
        console.log("Error to login", error.message);
        next(error);
    }
});

/*router.get('/:id', async function (req, res, next) {
    try {
        res.json(await users.getUserById(req.params.id))
    } catch (error) {
        console.log("Error to get user", error.message);
        next(error);
    }
});*/

module.exports = router;