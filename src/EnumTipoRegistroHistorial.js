/**
 * Enumeración de tiporegistrohistorial.
 */
class EnumTipoRegistroHistorial {
    static CONTRATACION = 1;
    static PRORROGA = 2;
    static TERMINO = 3;
    static NOVEDADPILA = 4;

    static descriptions = [
        { id: EnumTipoRegistroHistorial.CONTRATACION, code: 'CONTRATACION', description: 'Contratación' },
        { id: EnumTipoRegistroHistorial.PRORROGA, code: 'PRORROGA', description: 'Prórroga' },
        { id: EnumTipoRegistroHistorial.TERMINO, code: 'TERMINO', description: 'Termino' },
        { id: EnumTipoRegistroHistorial.NOVEDADPILA, code: 'NOVEDADPILA', description: 'Novedades de PILA' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoRegistroHistorial.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoRegistroHistorial.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoRegistroHistorial.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegistroHistorial;

