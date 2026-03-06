/**
 * Enumeración de tipoliquidacion.
 */
class EnumTipoLiquidacion {
    static LEY = 1;
    static PROVISIONES = 2;

    static descriptions = [
        { id: EnumTipoLiquidacion.LEY, code: 'LEY', description: "Ley" },
        { id: EnumTipoLiquidacion.PROVISIONES, code: 'PROVISIONES', description: "Provisiones" }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoLiquidacion.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoLiquidacion.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoLiquidacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoLiquidacion;

