/**
 * Enumeración de tiporegimen.
 */
class EnumTipoRegimen {
    static SIMPLIFICADO = 1;
    static COMUN = 2;
    static GRAN_CONTRIBUYENTE = 3;

    static descriptions = [
        { id: EnumTipoRegimen.SIMPLIFICADO, code: 'SIMPLIFICADO', description: 'Simplificado' },
        { id: EnumTipoRegimen.COMUN, code: 'COMUN', description: 'Común' },
        { id: EnumTipoRegimen.GRAN_CONTRIBUYENTE, code: 'GRAN_CONTRIBUYENTE', description: 'Gran Contribuyente' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoRegimen.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoRegimen.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoRegimen.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegimen;
