/**
 * Enumeración de tipoconceptomo.
 */
class EnumTipoConceptoMO {
    static DEFAULT = 1;
    static ADICIONAL = 2;

    static descriptions = [
        { id: EnumTipoConceptoMO.DEFAULT, code: 'DEFAULT', description: 'Default' },
        { id: EnumTipoConceptoMO.ADICIONAL, code: 'ADICIONAL', description: 'Adicional' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoConceptoMO.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoConceptoMO.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoConceptoMO.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoConceptoMO;
