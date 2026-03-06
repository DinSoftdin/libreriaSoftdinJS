/**
 * Enumeración de tipocuenta.
 */
class EnumTipoCuenta {
    static AHORRO = 1;
    static CORRIENTE = 2;

    static descriptions = [
        { id: EnumTipoCuenta.AHORRO, code: 'AHORRO', description: 'Ahorro' },
        { id: EnumTipoCuenta.CORRIENTE, code: 'CORRIENTE', description: 'Corriente' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoCuenta.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoCuenta.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoCuenta.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoCuenta;

