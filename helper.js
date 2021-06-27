/**
 * funcion que calcula el numero de paginas
 * que trae una consulta
 * @returns numero de paginas
 */
function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
}

/**
 * funcion que valida si el objeto rows tiene datos o no
 * @param rows object
 * @returns object
 */
function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

module.exports = {
    getOffset,
    emptyOrRows
}