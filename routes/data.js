const express = require('express');
const router = express.Router();
const dataT = require('../services/data');


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