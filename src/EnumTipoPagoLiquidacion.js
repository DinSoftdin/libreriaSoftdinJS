/**
 * Enumeración de tipopagoliquidacion.
 */
class EnumTipoPagoLiquidacion {
    static NOMINA = 1;
    static TESORERIA = 2;
    static FONDO = 3;
    static AHORRO = 4;

    static descriptions = [
        { id: EnumTipoPagoLiquidacion.NOMINA, code: 'NOMINA', description: 'Nómina' },
        { id: EnumTipoPagoLiquidacion.TESORERIA, code: 'TESORERIA', description: 'Tesorería' },
        { id: EnumTipoPagoLiquidacion.FONDO, code: 'FONDO', description: 'Fondo' },
        { id: EnumTipoPagoLiquidacion.AHORRO, code: 'AHORRO', description: 'Ahorro' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoPagoLiquidacion.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoPagoLiquidacion.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoPagoLiquidacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoPagoLiquidacion;
