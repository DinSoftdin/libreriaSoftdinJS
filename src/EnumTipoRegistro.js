/**
 * Enumeración de tiporegistro.
 */
class EnumTipoRegistro {
    static IMPORTACION = 1;
    static REGISTRO = 2;
    static WEB = 3;

    static descriptions = [
        { id: EnumTipoRegistro.IMPORTACION, code: 'IMPORTACION', description: 'Importación' },
        { id: EnumTipoRegistro.REGISTRO, code: 'REGISTRO', description: 'Registro' },
        { id: EnumTipoRegistro.WEB, code: 'WEB', description: 'Web' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoRegistro.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoRegistro.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoRegistro.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegistro;

