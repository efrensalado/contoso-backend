//Constantes para uso (librerias o archivos)
const mysql = require('mysql2/promise');
const config = require('../config');

/**
 * Funcion que ejecuta una consulta a nuestra base de datos
 * @param sql string que contiene el query
 * @param params parametros para preparar el query
 * @returns results
 */
async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results,] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}