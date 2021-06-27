const env = process.env;

/**
 * contante que almacena los datos
 * para el acceso a nuestra base de datos
 */
const config = {
    db: {
        host: env.DB_HOST || 'localhost',
        user: env.DB_USER || 'root',
        password: env.DB_PASSWORD || 'Salado00',
        database: env.DB_NAME || 'contosoapp',
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;