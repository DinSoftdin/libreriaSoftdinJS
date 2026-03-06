/**
 * Enumeración de rutas.
 */
class EnumRutas {
    static ARCHIVOPLANOPILA = 1;
    static ARCHIVOPLANOTB = 2;
    static EXPORTACION_EXCELL = 3;
    static BACKUP = 4;
    static NOMINAELECTRONICA = 5;

    static descriptions = [
        { id: EnumRutas.ARCHIVOPLANOPILA, code: 'ARCHIVOPLANOPILA', description: 'Archivo Plano PILA' },
        { id: EnumRutas.ARCHIVOPLANOTB, code: 'ARCHIVOPLANOTB', description: 'Archivo Plano TB' },
        { id: EnumRutas.EXPORTACION_EXCELL, code: 'EXPORTACION_EXCELL', description: 'Exportación Excel' },
        { id: EnumRutas.BACKUP, code: 'BACKUP', description: 'Backup' },
        { id: EnumRutas.NOMINAELECTRONICA, code: 'NOMINAELECTRONICA', description: 'Nomina Electrónica' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumRutas.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumRutas.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumRutas.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumRutas;

