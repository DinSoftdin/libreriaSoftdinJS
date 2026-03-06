/**
 * Enumeración de reportecomprobantespagofiltros.
 */
class EnumReporteComprobantesPAGOFiltros {
    static CLIENTE = 1;
    static MODALIDAD_CONTRATACION = 2;
    static CONTRATACION = 3;
    static CODIGO = 4;
    static EMAIL = 5;

    static descriptions = [
        { id: EnumReporteComprobantesPAGOFiltros.CLIENTE, code: 'CLIENTE', description: 'Cliente' },
        { id: EnumReporteComprobantesPAGOFiltros.MODALIDAD_CONTRATACION, code: 'MODALIDAD_CONTRATACION', description: 'Modalidad de Contratación' },
        { id: EnumReporteComprobantesPAGOFiltros.CONTRATACION, code: 'CONTRATACION', description: 'Contratación' },
        { id: EnumReporteComprobantesPAGOFiltros.CODIGO, code: 'CODIGO', description: 'Código' },
        { id: EnumReporteComprobantesPAGOFiltros.EMAIL, code: 'EMAIL', description: 'Email' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumReporteComprobantesPAGOFiltros.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumReporteComprobantesPAGOFiltros.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumReporteComprobantesPAGOFiltros.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumReporteComprobantesPAGOFiltros;
