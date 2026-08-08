/**
 * Enumeración de roles / responsabilidades por autoridad.
 */
class EnumRolResponsabilidades {
    static AUTORIDAD_SST = 1;
    static AUTORIDAD_AMBIENTAL = 2;

    static descriptions = [
        { id: EnumRolResponsabilidades.AUTORIDAD_SST, code: 'AUTORIDAD_SST', description: 'Autoridad en SST' },
        { id: EnumRolResponsabilidades.AUTORIDAD_AMBIENTAL, code: 'AUTORIDAD_AMBIENTAL', description: 'Autoridad Ambiental' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumRolResponsabilidades.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumRolResponsabilidades.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumRolResponsabilidades.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumRolResponsabilidades;
