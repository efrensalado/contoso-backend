const express = require('express');

//constante de routeo
const router = express.Router();
//contante de servicio data
const dataT = require('../services/data');

/* 
* Asignacion de routeo para la constante de routeo
* la cual se encarga de realizar acciones que se 
* encuentran declaradas en ./services/data
*/
router.get('/', async function (req, res, next) {
    try {
        res.json(await dataT.getAllData(req.query.page));
    } catch (err) {
        console.error(`Error while getting al data `, err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        res.json(await dataT.newData(req.body))
    } catch (error) {
        console.log("Error creating new data", error.message);
        next(error);
    }
});

router.get('/:id', async function (req, res, next) {
    try {
        res.json(await dataT.getDataById(req.params.id))
    } catch (error) {
        console.log("Error to get data", error.message);
        next(error);
    }
});

module.exports = router;