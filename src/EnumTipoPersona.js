/**
 * Enumeración de tipopersona.
 */
class EnumTipoPersona {
    static NATURAL = 1;
    static JURIDICA = 2;

    static descriptions = [
        { id: EnumTipoPersona.NATURAL, code: 'NAT', description: 'Natural' },
        { id: EnumTipoPersona.JURIDICA, code: 'JUR', description: 'Jurídica' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoPersona.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoPersona.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoPersona.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoPersona;
