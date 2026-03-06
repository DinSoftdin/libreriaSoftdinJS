/**
 * Enumeración de reportecomprobantespago.
 */
class EnumReporteComprobantesPAGO {
    static GENERAL = 1;
    static DETALLADO_INGRESOS = 2;
    static DETALLADO_MODALIDAD = 3;
    static DETALLADO_PRESTAMOS = 4;
    static RESUMEN = 5;

    static descriptions = [
        { id: EnumReporteComprobantesPAGO.GENERAL, code: 'GENERAL', description: 'General' },
        { id: EnumReporteComprobantesPAGO.DETALLADO_INGRESOS, code: 'DETALLADO_INGRESOS', description: 'Detallado de Ingresos' },
        { id: EnumReporteComprobantesPAGO.DETALLADO_MODALIDAD, code: 'DETALLADO_MODALIDAD', description: 'Detallado Modalidad' },
        { id: EnumReporteComprobantesPAGO.DETALLADO_PRESTAMOS, code: 'DETALLADO_PRESTAMOS', description: 'Detallado Prestamos' },
        { id: EnumReporteComprobantesPAGO.RESUMEN, code: 'RESUMEN', description: 'Resumen' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumReporteComprobantesPAGO.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumReporteComprobantesPAGO.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumReporteComprobantesPAGO.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumReporteComprobantesPAGO;

