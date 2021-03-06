//constantes de config para uso posterior
const db = require('./databse');
const helper = require('../helper');
const config = require('../config');

/**
 * funcion que ejecuta un select a la tabla users
 * @returns object
 */
async function getAllUsers(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM users`,
        [offset, config.listPerPage]
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta
    }
}

/**
 * Funcion que realiza una insercion
 * @param data object
 * @returns object
 */
async function newUser(data) {
    const result = await db.query(
        "INSERT INTO users VALUES (null, ?, ?, ?)",
        [data.username, data.password, 1]
    );

    let obj = {};

    if (result.affectedRows) {
        obj.message = "User Created";
        obj.status = 201
    } else {
        obj.message = "Error creating a new user";
        obj.status = 404
    }

    return obj;
}

/**
 * Funcion que ejecuta el select de un solo user
 * @param id string || int
 * @returns object returnData
 */
async function getUserById(id) {
    const result = await db.query(
        "SELECT * FROM users WHERE idUser = ?",
        [id]
    );
    
    let returnData = null;

    if (result.length != 0) {
        returnData = result;
    } else {
        returnData = {
            message: "User not found with id = " + id,
            status: 404
        }
    }
    return returnData;
}

/**
 * Funcion que ejecuta la consulta para el login
 * @param username string
 * @returns object
 */
async function login(username) {
    const result = await db.query(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );
    
    let returnData = null;

    if (result.length != 0) {
        returnData = result;
    } else {
        returnData = {
            message: "User not found",
            status: 404
        }
    }
    return returnData;
}

//exportacion de variables y/o metodos y funciones
//para uso en otro archivo
module.exports = {
    getAllUsers,
    newUser,
    login,
    getUserById
}