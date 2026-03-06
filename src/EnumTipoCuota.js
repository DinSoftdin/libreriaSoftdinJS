/**
 * Enumeración de tipocuota.
 */
class EnumTipoCuota {
    static QUINCENAL = 1;
    static MENSUAL = 2;

    static descriptions = [
        { id: EnumTipoCuota.QUINCENAL, code: 'QUINCENAL', description: 'Quincenal' },
        { id: EnumTipoCuota.MENSUAL, code: 'MENSUAL', description: 'Mensual' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoCuota.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoCuota.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoCuota.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoCuota;

