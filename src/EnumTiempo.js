/**
 * Enumeración de tiempo.
 */
class EnumTiempo {
    static hh = 1;
    static mm = 2;
    static ss = 3;

    static descriptions = [
        { id: EnumTiempo.hh, code: 'hh', description: 'Hora' },
        { id: EnumTiempo.mm, code: 'mm', description: 'Minuto' },
        { id: EnumTiempo.ss, code: 'ss', description: 'Segundo' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTiempo.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTiempo.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTiempo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTiempo;

