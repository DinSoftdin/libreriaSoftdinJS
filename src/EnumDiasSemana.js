/**
 * Enumeración de diassemana.
 */
class EnumDiasSemana {
    static LUNES = 1;
    static MARTES = 2;
    static MIERCOLES = 3;
    static JUEVES = 4;
    static VIERNES = 5;
    static SABADO = 6;
    static DOMINGO = 7;

    static descriptions = [
        { id: EnumDiasSemana.LUNES, code: 'LUNES', description: 'Lunes' },
        { id: EnumDiasSemana.MARTES, code: 'MARTES', description: 'Martes' },
        { id: EnumDiasSemana.MIERCOLES, code: 'MIERCOLES', description: 'Miercoles' },
        { id: EnumDiasSemana.JUEVES, code: 'JUEVES', description: 'Jueves' },
        { id: EnumDiasSemana.VIERNES, code: 'VIERNES', description: 'Viernes' },
        { id: EnumDiasSemana.SABADO, code: 'SABADO', description: 'Sabado' },
        { id: EnumDiasSemana.DOMINGO, code: 'DOMINGO', description: 'Domingo' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumDiasSemana.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumDiasSemana.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumDiasSemana.descriptions.find(item => item.description === description) || null;
    }
}


module.exports = EnumDiasSemana;