/**
 * Enumeración de retefuenteprocedimiento.
 */
class EnumReteFuenteProcedimiento {
    static PROCED_UNO = 1;
    static PROCED_DOS = 2;

    static descriptions = [
        { id: EnumReteFuenteProcedimiento.PROCED_UNO, code: 'PROCED1', description: 'Procedimiento UNO' },
        { id: EnumReteFuenteProcedimiento.PROCED_DOS, code: 'PROCED2', description: 'Procedimiento DOS' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumReteFuenteProcedimiento.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumReteFuenteProcedimiento.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumReteFuenteProcedimiento.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumReteFuenteProcedimiento;

