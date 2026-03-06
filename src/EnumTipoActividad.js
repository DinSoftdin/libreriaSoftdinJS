/**
 * Enumeración de tipoactividad.
 */
class EnumTipoActividad {
    static COMERCIAL = 1;
    static SERVICIO = 2;
    static INDUSTRIAL = 3;

    static descriptions = [
        { id: EnumTipoActividad.COMERCIAL, code: 'COM', description: 'Comercial' },
        { id: EnumTipoActividad.SERVICIO, code: 'SER', description: 'Servicio' },
        { id: EnumTipoActividad.INDUSTRIAL, code: 'IND', description: 'Industrial' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoActividad.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoActividad.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoActividad.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoActividad;

