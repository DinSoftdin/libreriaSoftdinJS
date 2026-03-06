/**
 * Enumeración de ne vacaciones.
 */
class EnumNE_Vacaciones {
    static VC = 1;
    static VCP = 2;

    static descriptions = [
        { id: EnumNE_Vacaciones.VC, code: 'VC', description: 'Vacaciones Comunes' },
        { id: EnumNE_Vacaciones.VCP, code: 'VCP', description: 'Vacaciones Compensadas' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_Vacaciones.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_Vacaciones.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_Vacaciones.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_Vacaciones.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_Vacaciones;