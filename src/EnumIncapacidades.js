const EnumVariablesSistema = require('./EnumVariablesSistema');

/**
 * Enumeración de tipos de incapacidades y licencias (general, accidente de trabajo, maternidad).
 */


class EnumIncapacidades {
    static IGE_IncapacidadGeneral = EnumVariablesSistema.IGE_IncapacidadGeneral;
    static IRP_IncapacidadAccidenteTrabajo = EnumVariablesSistema.IRP_IncapacidadAccidenteTrabajo;
    static LMA_LicenciaMaternidad = EnumVariablesSistema.LMA_LicenciaMaternidad;

    static descriptions = [
        { id: EnumIncapacidades.IGE_IncapacidadGeneral, code: 'IGE_IncapacidadGeneral', description: EnumVariablesSistema.getById(EnumVariablesSistema.IGE_IncapacidadGeneral).description },
        { id: EnumIncapacidades.IRP_IncapacidadAccidenteTrabajo, code: 'IRP_IncapacidadAccidenteTrabajo', description: EnumVariablesSistema.getById(EnumVariablesSistema.IRP_IncapacidadAccidenteTrabajo).description },
        { id: EnumIncapacidades.LMA_LicenciaMaternidad, code: 'LMA_LicenciaMaternidad', description: EnumVariablesSistema.getById(EnumVariablesSistema.LMA_LicenciaMaternidad).description },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumIncapacidades.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumIncapacidades.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumIncapacidades.descriptions.find(item => item.description === description) || null;
    }
/**
* Obtiene la descripción correspondiente a un valor numérico.
* @param {number} value - Valor numérico de la enumeración.

     * @returns {string|null} Descripción del elemento o null si no existe.
*/

    static getDescription(value) {
        const keys = Object.keys(EnumIncapacidades);
        for (const key of keys) {
            if (EnumIncapacidades[key] === value) {
                return EnumIncapacidades.getDescriptionByName(key);
            }
        }
        return null;
    }
/**
* Obtiene la descripción por el nombre de la propiedad de la clase.
* @param {string} name - Nombre de la propiedad estática.

     * @returns {string|null} Descripción del elemento o null si no existe.
*/

    static getDescriptionByName(name) {
        const description = EnumIncapacidades[name].description;
        return description ? description : null;
    }
}

module.exports = EnumIncapacidades;
