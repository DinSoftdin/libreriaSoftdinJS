/**
 * Enumeración de sexo.
 */
class EnumSexo {
    static M = 1;
    static F = 2;
    static ND = 3;
    static NDR = 4;

    static descriptions = [
        { id: EnumSexo.M, code: 'M', description: 'Masculino' },
        { id: EnumSexo.F, code: 'F', description: 'Femenino' },
        { id: EnumSexo.ND, code: 'ND', description: 'No definido' },
        { id: EnumSexo.NDR, code: 'NDR', description: 'No deseo responder' }    
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumSexo.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumSexo.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumSexo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumSexo;

