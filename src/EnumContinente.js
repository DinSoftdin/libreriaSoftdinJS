/**
 * Enumeración de continente.
 */
class EnumContinente {
    static ASIA = 1;
    static AFRICA = 2;
    static EUROPA = 3;
    static AMERICA_NORTE = 4;
    static AMERICA_SUR = 5;
    static OCEANIA = 6;

    static descriptions = [
        { id: EnumContinente.ASIA, code: 'ASIA', description: 'Asia' },
        { id: EnumContinente.AFRICA, code: 'AFRICA', description: 'Africa' },
        { id: EnumContinente.EUROPA, code: 'EUROPA', description: 'Europa' },
        { id: EnumContinente.AMERICA_NORTE, code: 'AMERICA_NORTE', description: 'América del Norte' },
        { id: EnumContinente.AMERICA_SUR, code: 'AMERICA_SUR', description: 'América del Sur' },
        { id: EnumContinente.OCEANIA, code: 'OCEANIA', description: 'Oceanía' },    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumContinente.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumContinente.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumContinente.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumContinente;

