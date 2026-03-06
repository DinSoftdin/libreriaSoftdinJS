/**
 * Enumeración de ne tiponota.
 */
class EnumNE_TipoNota {
    static Reemplazar = 1;
    static Eliminar = 2;

    static descriptions = [
        { id: EnumNE_TipoNota.Reemplazar, code: 'Reemplazar', description: 'Reemplazar' },
        { id: EnumNE_TipoNota.Eliminar, code: 'Eliminar', description: 'Eliminar' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_TipoNota.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_TipoNota.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_TipoNota.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_TipoNota.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoNota;