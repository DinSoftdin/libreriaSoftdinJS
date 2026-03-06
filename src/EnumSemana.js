/**
 * Enumeración de semana.
 */
class EnumSemana {
    static LV = 1;
    static LS = 2;
    static D = 3;

    static descriptions = [
        { id: EnumSemana.LV, code: 'LV', description: 'Lunes a Viernes' },
        { id: EnumSemana.LS, code: 'LS', description: 'Lunes a Sábado' },
        { id: EnumSemana.D, code: 'D', description: 'Domingo' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumSemana.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumSemana.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumSemana.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumSemana;

