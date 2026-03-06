/**
 * Enumeración de tiporeferencia.
 */
class EnumTipoReferencia {
    static PERSONAL = 1;
    static FAMILIAR = 2;

    static descriptions = [
        { id: EnumTipoReferencia.PERSONAL, code: 'PERSONAL', description: 'Personal' },
        { id: EnumTipoReferencia.FAMILIAR, code: 'FAMILIAR', description: 'Familiar' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoReferencia.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoReferencia.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoReferencia.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoReferencia;
