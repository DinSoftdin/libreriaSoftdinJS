/**
 * Clases de riesgo de la actividad económica (ARL / Decreto 1072 de 2015).
 * Tarifas de cotización sobre el IBC.
 */
class EnumClaseRiesgoActividad {
    static CLASE_I = 1;
    static CLASE_II = 2;
    static CLASE_III = 3;
    static CLASE_IV = 4;
    static CLASE_V = 5;

    static descriptions = [
        {
            id: EnumClaseRiesgoActividad.CLASE_I,
            code: 'CLASE_I',
            description: 'Clase I - Riesgo mínimo',
            porcentaje: 0.522,
        },
        {
            id: EnumClaseRiesgoActividad.CLASE_II,
            code: 'CLASE_II',
            description: 'Clase II - Riesgo bajo',
            porcentaje: 1.044,
        },
        {
            id: EnumClaseRiesgoActividad.CLASE_III,
            code: 'CLASE_III',
            description: 'Clase III - Riesgo medio',
            porcentaje: 2.436,
        },
        {
            id: EnumClaseRiesgoActividad.CLASE_IV,
            code: 'CLASE_IV',
            description: 'Clase IV - Riesgo alto',
            porcentaje: 4.350,
        },
        {
            id: EnumClaseRiesgoActividad.CLASE_V,
            code: 'CLASE_V',
            description: 'Clase V - Riesgo máximo',
            porcentaje: 6.960,
        },
    ];

    /**
     * Obtiene un elemento por su identificador.
     * @param {number} id - Identificador del elemento.
     * @returns {Object|null} El objeto con id, code, description y porcentaje, o null si no existe.
     */
    static getById(id) {
        return EnumClaseRiesgoActividad.descriptions.find((item) => item.id === id) || null;
    }

    /**
     * Obtiene todos los elementos de la enumeración.
     * @returns {Array} Lista de objetos con id, code, description y porcentaje.
     */
    static getAll() {
        return EnumClaseRiesgoActividad.descriptions;
    }

    /**
     * Obtiene un elemento por su descripción.
     * @param {string} description - Descripción del elemento.
     * @returns {Object|null} El objeto encontrado o null si no existe.
     */
    static getByDescription(description) {
        return (
            EnumClaseRiesgoActividad.descriptions.find(
                (item) => item.description === description,
            ) || null
        );
    }

    /**
     * Obtiene un elemento por su porcentaje de cotización ARL.
     * @param {number} porcentaje - Porcentaje sobre el IBC.
     * @returns {Object|null} El objeto encontrado o null si no existe.
     */
    static getByPorcentaje(porcentaje) {
        return (
            EnumClaseRiesgoActividad.descriptions.find(
                (item) => Math.abs(item.porcentaje - porcentaje) < 0.0001,
            ) || null
        );
    }

    /**
     * Retorna el porcentaje de cotización ARL de una clase.
     * @param {number} id - Identificador de la clase.
     * @returns {number|null} Porcentaje o null si no existe.
     */
    static getPorcentaje(id) {
        const item = EnumClaseRiesgoActividad.getById(id);
        return item ? item.porcentaje : null;
    }
}

module.exports = EnumClaseRiesgoActividad;
