/**
 * Enumeración de ne operadores.
 */
class EnumNE_Operadores {
    static Facturaxion = 1;
    static Dian = 2;

    static descriptions = [
        { id: EnumNE_Operadores.Facturaxion, code: 'Facturaxion', description: 'Facturación' },
        { id: EnumNE_Operadores.Dian, code: 'Dian', description: 'DIAN' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_Operadores.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_Operadores.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_Operadores.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_Operadores.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_Operadores;