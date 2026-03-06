/**
 * Enumeración de ne tipoincapacidad.
 */
class EnumNE_TipoIncapacidad {
    static Comun = 1;
    static Profesional = 2;
    static Laboral = 3;

    static descriptions = [
        { id: EnumNE_TipoIncapacidad.Comun, code: 'Comun', description: 'Común' },
        { id: EnumNE_TipoIncapacidad.Profesional, code: 'Profesional', description: 'Profesional' },
        { id: EnumNE_TipoIncapacidad.Laboral, code: 'Laboral', description: 'Laboral' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_TipoIncapacidad.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_TipoIncapacidad.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_TipoIncapacidad.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_TipoIncapacidad.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoIncapacidad;