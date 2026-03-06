/**
 * Enumeración de tiemponovedades.
 */
class EnumTiempoNovedades {
    static Fecha = 1;
    static Fecha_Hora = 2;

    static descriptions = [
        { id: EnumTiempoNovedades.Fecha, code: 'Fecha', description: 'Fecha' },
        { id: EnumTiempoNovedades.Fecha_Hora, code: 'Fecha_Hora', description: 'Fecha y Hora' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTiempoNovedades.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTiempoNovedades.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTiempoNovedades.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTiempoNovedades;

