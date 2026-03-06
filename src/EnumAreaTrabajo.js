/**
 * Enumeración de areatrabajo.
 */
class EnumAreaTrabajo {
    static ADMINISTRATIVO = 1;
    static OPERATIVO = 2;

    static descriptions = [
        { id: EnumAreaTrabajo.ADMINISTRATIVO, code: 'ADMINISTRATIVO', description: 'Administrativo' },
        { id: EnumAreaTrabajo.OPERATIVO, code: 'OPERATIVO', description: 'Operativo' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumAreaTrabajo.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumAreaTrabajo.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumAreaTrabajo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumAreaTrabajo;