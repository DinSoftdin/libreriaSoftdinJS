/**
 * Enumeración de formapresentacion.
 */
class EnumFormaPresentacion {
    static UNICO = 1;
    static CONSOLIDADO = 2;
    static SUCURSAL = 3;
    static DEPENDENCIA = 4;

    static descriptions = [
        { id: EnumFormaPresentacion.UNICO, code: 'UNICO', description: 'Único' },
        { id: EnumFormaPresentacion.CONSOLIDADO, code: 'CONSOLIDADO', description: 'Consolidado' },
        { id: EnumFormaPresentacion.SUCURSAL, code: 'SUCURSAL', description: 'Sucursal' },
        { id: EnumFormaPresentacion.DEPENDENCIA, code: 'DEPENDENCIA', description: 'Dependencia' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumFormaPresentacion.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumFormaPresentacion.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumFormaPresentacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumFormaPresentacion;
