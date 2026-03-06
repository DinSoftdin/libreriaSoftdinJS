/**
 * Enumeración de tipopago.
 */
class EnumTipoPago {
    static COMERCIAL = 1;
    static CALENDARIO = 2;

    static descriptions = [
        { id: EnumTipoPago.COMERCIAL, code: 'COMERCIAL', description: 'Comercial' },
        { id: EnumTipoPago.CALENDARIO, code: 'CALENDARIO', description: 'Calendario' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoPago.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoPago.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoPago.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoPago;
