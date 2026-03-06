/**
 * Enumeración de aplicacionconceptonovedadempresal.
 */
class EnumAplicacionConceptoNovedadEmpresal {
    static INDIVIDUAL = 1;
    static TODOS = 2;
    static AGRUPAR = 3;

    static descriptions = [
        { id: EnumAplicacionConceptoNovedadEmpresal.INDIVIDUAL, code: 'INDIVIDUAL', description: 'Individual' },
        { id: EnumAplicacionConceptoNovedadEmpresal.TODOS, code: 'TODOS', description: 'Todos' },
        { id: EnumAplicacionConceptoNovedadEmpresal.AGRUPAR, code: 'AGRUPAR', description: 'Agrupar' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumAplicacionConceptoNovedadEmpresal.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumAplicacionConceptoNovedadEmpresal.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumAplicacionConceptoNovedadEmpresal.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumAplicacionConceptoNovedadEmpresal;