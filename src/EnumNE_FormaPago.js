/**
 * Enumeración de ne formapago.
 */
class EnumNE_FormaPago {
    static Contado = 1;

    static descriptions = [
        { id: EnumNE_FormaPago.Contado, code: 'Contado', description: 'Contado' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_FormaPago.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_FormaPago.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_FormaPago.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_FormaPago.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_FormaPago;