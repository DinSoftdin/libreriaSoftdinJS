/**
 * Enumeración de modulosnovedades.
 * `code` = valor en `concepto_modulos.modulo` (alineado con PHP EnumModulosNovedades).
 */
class EnumModulosNovedades {
    static APORTE_VOLUNTARIO_SEGURIDAD_SOCIAL = 1;
    static BENEFICIO_PERSONAL = 2;
    static EMBARGOS = 3;
    static FONDOS_AHORRO_PAGO = 4;
    static FONDOS_AHORRO_REGISTROS = 5;
    static HORAS_EXTRAS = 6;
    static INGRESOS_DESCUENTOS_CONSECUTIVOS = 7;
    static NOVEDADES_CARGOS = 8;
    static NOVEDADES_RETE_FUENTE = 9;
    static NOVEDADES_SEGURIDAD_SOCIAL = 10;
    static OTROS_INGRESOS_DESCUENTOS = 11;
    static PAGOS_EXTERNOS = 12;
    static PRESTAMOS = 15;

    static descriptions = [
        { id: EnumModulosNovedades.APORTE_VOLUNTARIO_SEGURIDAD_SOCIAL, code: 6, description: 'Aporte Voluntario Seguridad Social' },
        { id: EnumModulosNovedades.BENEFICIO_PERSONAL, code: 104, description: 'Beneficio Personal' },
        { id: EnumModulosNovedades.EMBARGOS, code: 36, description: 'Embargos' },
        { id: EnumModulosNovedades.FONDOS_AHORRO_REGISTROS, code: 42, description: 'Fondos Ahorro Registros' },
        { id: EnumModulosNovedades.FONDOS_AHORRO_PAGO, code: 43, description: 'Fondos Ahorro Pago' },
        { id: EnumModulosNovedades.HORAS_EXTRAS, code: 45, description: 'Horas Extras' },
        { id: EnumModulosNovedades.INGRESOS_DESCUENTOS_CONSECUTIVOS, code: 48, description: 'Ingresos Descuentos Consecutivos' },
        { id: EnumModulosNovedades.NOVEDADES_CARGOS, code: 103, description: 'Novedades Cargos' },
        { id: EnumModulosNovedades.NOVEDADES_SEGURIDAD_SOCIAL, code: 56, description: 'Novedades Seguridad Social' },
        { id: EnumModulosNovedades.NOVEDADES_RETE_FUENTE, code: 32, description: 'Novedades Rete Fuente' },
        { id: EnumModulosNovedades.OTROS_INGRESOS_DESCUENTOS, code: 57, description: 'Otros Ingresos Descuentos' },
        { id: EnumModulosNovedades.PAGOS_EXTERNOS, code: 130, description: 'Pagos Externos' },
        { id: EnumModulosNovedades.PRESTAMOS, code: 34, description: 'Préstamos' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumModulosNovedades.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumModulosNovedades.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumModulosNovedades.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumModulosNovedades;
