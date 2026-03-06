/**
 * Enumeración de ne periodonomina.
 */
class EnumNE_PeriodoNomina {
    static Semanal = 1;
    static Decenal = 2;
    static Catorcenal = 3;
    static Quincenal = 4;
    static Mensual = 5;
    static Otro = 6;

    static descriptions = [
        { id: EnumNE_PeriodoNomina.Semanal, code: 'Semanal', description: 'Semanal' },
        { id: EnumNE_PeriodoNomina.Decenal, code: 'Decenal', description: 'Decenal' },
        { id: EnumNE_PeriodoNomina.Catorcenal, code: 'Catorcenal', description: 'Catorcenal' },
        { id: EnumNE_PeriodoNomina.Quincenal, code: 'Quincenal', description: 'Quincenal' },
        { id: EnumNE_PeriodoNomina.Mensual, code: 'Mensual', description: 'Mensual' },
        { id: EnumNE_PeriodoNomina.Otro, code: 'Otro', description: 'Otro' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_PeriodoNomina.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_PeriodoNomina.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_PeriodoNomina.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_PeriodoNomina.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_PeriodoNomina;
