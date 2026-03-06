/**
 * Enumeración de tipolibretamilitar.
 */
class EnumTipoLibretaMilitar {
    static PRIMERA = 1;
    static SEGUNDA = 2;
    static NO_APLICA = 3;
    static NO_DEFINIDO = 0;

    static descriptions = [
        { id: EnumTipoLibretaMilitar.PRIMERA, code: 'PRIMERA', description: "Primera" },
        { id: EnumTipoLibretaMilitar.SEGUNDA, code: 'SEGUNDA', description: "Segunda" },
        { id: EnumTipoLibretaMilitar.NO_APLICA, code: 'NO_APLICA', description: "No Aplica" },
        { id: EnumTipoLibretaMilitar.NO_DEFINIDO, code: 'NO_DEFINIDO', description: "No Definido" }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoLibretaMilitar.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoLibretaMilitar.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoLibretaMilitar.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoLibretaMilitar;

