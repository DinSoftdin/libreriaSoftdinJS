/**
 * Enumeración de claseempresa.
 */
class EnumClaseEmpresa {
    static EMPRESA = 1;
    static COOPERATIVA = 2;
    static BANCO = 3;
    static PILA = 4;

    static descriptions = [
        { id: EnumClaseEmpresa.EMPRESA, code: 'EMP', description: 'EMPRESA' },
        { id: EnumClaseEmpresa.COOPERATIVA, code: 'COP', description: 'COOPERATIVA' },
        { id: EnumClaseEmpresa.BANCO, code: 'BAN', description: 'BANCO' },
        { id: EnumClaseEmpresa.PILA, code: 'PIL', description: 'PILA' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumClaseEmpresa.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumClaseEmpresa.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumClaseEmpresa.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumClaseEmpresa;
