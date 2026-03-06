/**
 * Enumeración de modalidadservicio.
 */
class EnumModalidadServicio {
    static NORMAL = 1;
    static PPD = 2;
    static LABOR = 3;

    static descriptions = [
        { id: EnumModalidadServicio.NORMAL, code: 'NORMAL', description: 'Normal' },
        { id: EnumModalidadServicio.PPD, code: 'PPD', description: 'PPD' },
        { id: EnumModalidadServicio.LABOR, code: 'LABOR', description: 'Labor' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumModalidadServicio.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumModalidadServicio.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumModalidadServicio.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumModalidadServicio;
