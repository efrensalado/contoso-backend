const db = require('./databse');
const helper = require('../helper');
const config = require('../config');

async function getAllData(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM data`,
        [offset, config.listPerPage]
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}

async function newData(data) {
    const result = await db.query(
        "INSERT INTO data VALUES (null, ?, ?, ?, ?, ?, ?)",
        [
            data.first_name, 
            data.last_name,
            data.address,
            data.telephone,
            data.interests,
            data.idUser
        ]
    );

    //let message = "";
    let obj = {};

    if (result.affectedRows) {
        obj.message = "Data saved";
        obj.status = 201;
    } else {
        obj.message = "Error creating a new data";
        obj.status = 500;
    }

    return message;
}

async function getDataById(id) {
    const result = await db.query(
        "SELECT * FROM data WHERE idData = ?",
        [id]
    );
    
    let returnData = null;

    if (result.length != 0) {
        returnData = result;
    } else {
        returnData = {
            message: "No data found with id = " + id,
            status: 404
        }
    }
    return returnData;
}

module.exports = {
    getAllData,
    newData,
    getDataById
}