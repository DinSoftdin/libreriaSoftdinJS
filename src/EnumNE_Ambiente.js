/**
 * Enumeración de ne ambiente.
 */
class EnumNE_Ambiente {
    static Produccion = 1;
    static Pruebas = 2;

    static descriptions = [
        { id: EnumNE_Ambiente.Produccion, code: 'Produccion', description: 'Producción' },
        { id: EnumNE_Ambiente.Pruebas, code: 'Pruebas', description: 'Pruebas' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_Ambiente.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_Ambiente.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_Ambiente.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_Ambiente.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_Ambiente;