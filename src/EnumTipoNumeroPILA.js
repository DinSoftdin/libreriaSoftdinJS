/**
 * Enumeración de tiponumeropila.
 */
class EnumTipoNumeroPILA {
    static N = 1;
    static A = 2;

    static descriptions = [
        { id: EnumTipoNumeroPILA.N, code: 'N', description: 'N' },
        { id: EnumTipoNumeroPILA.A, code: 'A', description: 'A' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoNumeroPILA.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoNumeroPILA.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoNumeroPILA.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoNumeroPILA;
