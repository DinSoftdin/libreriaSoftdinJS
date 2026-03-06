/**
 * Enumeración de ne licencias.
 */
class EnumNE_Licencias {
    static LMP = 1;
    static LR = 2;
    static LNR = 3;

    static descriptions = [
        { id: EnumNE_Licencias.LMP, code: 'LMP', description: 'LicenciasMaternidadOPaternidad' },
        { id: EnumNE_Licencias.LR, code: 'LR', description: 'LicenciasRemuneradas' },
        { id: EnumNE_Licencias.LNR, code: 'LNR', description: 'LicenciasNoRemuneradas' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_Licencias.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_Licencias.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_Licencias.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_Licencias.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_Licencias;
