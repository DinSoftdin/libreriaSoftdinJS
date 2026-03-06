/**
 * Enumeración de tipotransferencia.
 */
class EnumTipoTransferencia {
    static CONSIGNACION = 1;
    static CHEQUE = 2;

    static descriptions = [
        { id: EnumTipoTransferencia.CONSIGNACION, code: 'CONSIGNACION', description: 'Consignación' },
        { id: EnumTipoTransferencia.CHEQUE, code: 'CHEQUE', description: 'Cheque' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoTransferencia.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoTransferencia.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoTransferencia.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoTransferencia;

