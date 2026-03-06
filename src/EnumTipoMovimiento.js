/**
 * Enumeración de tipomovimiento.
 */
class EnumTipoMovimiento {
    static INGRESO = 1;
    static DESCUENTO = 2;

    static descriptions = [
        { id: EnumTipoMovimiento.INGRESO, code: 'INGRESO', description: 'Ingreso' },
        { id: EnumTipoMovimiento.DESCUENTO, code: 'DESCUENTO', description: 'Descuento' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoMovimiento.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoMovimiento.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoMovimiento.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoMovimiento;

