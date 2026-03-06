/**
 * Enumeración de parentesco.
 */
class EnumParentesco {
    static PADRE = 1;
    static MADRE = 2;
    static ESPOSO = 3;
    static HIJO = 4;
    static HERMANO = 5;
    static TIO = 6;
    static OTROS = 7;

    static descriptions = [
        { id: EnumParentesco.PADRE, code: 'PADRE', description: 'Padre' },
        { id: EnumParentesco.MADRE, code: 'MADRE', description: 'Madre' },
        { id: EnumParentesco.ESPOSO, code: 'ESPOSO', description: 'Esposo(a)' },
        { id: EnumParentesco.HIJO, code: 'HIJO', description: 'Hijo(a)' },
        { id: EnumParentesco.HERMANO, code: 'HERMANO', description: 'Hermano(a)' },
        { id: EnumParentesco.TIO, code: 'TIO', description: 'Tio(a)' },
        { id: EnumParentesco.OTROS, code: 'OTROS', description: 'Otros' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumParentesco.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumParentesco.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumParentesco.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumParentesco;
