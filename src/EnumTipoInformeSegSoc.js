/**
 * Enumeración de tipoinformesegsoc.
 */
class EnumTipoInformeSegSoc {
    static PILA = 1;
    static PROVISION = 2;

    static descriptions = [
        { id: EnumTipoInformeSegSoc.PILA, code: 'PILA', description: "PILA" },
        { id: EnumTipoInformeSegSoc.PROVISION, code: 'PROVISION', description: "Provisión" }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoInformeSegSoc.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoInformeSegSoc.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoInformeSegSoc.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoInformeSegSoc;
