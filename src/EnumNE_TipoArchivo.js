/**
 * Enumeración de ne tipoarchivo.
 */
class EnumNE_TipoArchivo {
    static N = 1;
    static E = 2;
    static A = 3;

    static descriptions = [
        { id: EnumNE_TipoArchivo.N, code: 'N', description: 'Tipo N' },
        { id: EnumNE_TipoArchivo.E, code: 'E', description: 'Tipo E' },
        { id: EnumNE_TipoArchivo.A, code: 'A', description: 'Tipo A' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_TipoArchivo.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_TipoArchivo.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_TipoArchivo.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_TipoArchivo.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoArchivo;
