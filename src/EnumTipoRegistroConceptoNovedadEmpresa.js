/**
 * Enumeración de tiporegistroconceptonovedadempresa.
 */
class EnumTipoRegistroConceptoNovedadEmpresa {
    static ASIGCON = 1;
    static EMPRESA = 2;

    static descriptions = [
        { id: EnumTipoRegistroConceptoNovedadEmpresa.ASIGCON, code: 'ASIGCON', description: 'Asignación Contable' },
        { id: EnumTipoRegistroConceptoNovedadEmpresa.EMPRESA, code: 'EMPRESA', description: 'Asignación por Empresa' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoRegistroConceptoNovedadEmpresa.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoRegistroConceptoNovedadEmpresa.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoRegistroConceptoNovedadEmpresa.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegistroConceptoNovedadEmpresa;

