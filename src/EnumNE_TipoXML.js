/**
 * Enumeración de ne tipoxml.
 */
class EnumNE_TipoXML {
    static NominaIndividual = 102;
    static NominaIndividualDeAjuste = 103;

    static descriptions = [
        { id: EnumNE_TipoXML.NominaIndividual, code: 'NominaIndividual', description: 'Nomina Individual' },
        { id: EnumNE_TipoXML.NominaIndividualDeAjuste, code: 'NominaIndividualDeAjuste', description: 'Nomina Individual de Ajuste' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_TipoXML.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_TipoXML.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_TipoXML.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_TipoXML.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoXML;