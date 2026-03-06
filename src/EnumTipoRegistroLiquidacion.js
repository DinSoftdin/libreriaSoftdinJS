/**
 * Enumeración de tiporegistroliquidacion.
 */
class EnumTipoRegistroLiquidacion {
    static ANTICIPO = 1;
    static PAGO = 2;
    static PAGO_SD = 3;

    static descriptions = [
        { id: EnumTipoRegistroLiquidacion.ANTICIPO, code: 'ANTICIPO', description: 'Anticipo' },
        { id: EnumTipoRegistroLiquidacion.PAGO, code: 'PAGO', description: 'Pago' },
        { id: EnumTipoRegistroLiquidacion.PAGO_SD, code: 'PAGO_SD', description: 'Pago SD' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoRegistroLiquidacion.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoRegistroLiquidacion.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoRegistroLiquidacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegistroLiquidacion;

