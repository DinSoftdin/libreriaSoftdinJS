const EnumTipoIdentificacion = require('./EnumTipoIdentificacion');

/**
* Enumeración de tipoidentificacionembargo.
*/


class EnumTipoIdentificacionEmbargo {
    static CC = EnumTipoIdentificacion.CC;
    static CE = EnumTipoIdentificacion.CE;
    static NIT_P = EnumTipoIdentificacion.NI;
    static PA = EnumTipoIdentificacion.PA;
    static TI = EnumTipoIdentificacion.TI;
    static NIT_O = EnumTipoIdentificacion.NIO;
 
    static descriptions = [
        { id: EnumTipoIdentificacionEmbargo.CC, code: 'CC', description: "Cedula de Ciudadanía" },
        { id: EnumTipoIdentificacionEmbargo.CE, code: 'CE', description: "Cedula de Extranjería" },
        { id: EnumTipoIdentificacionEmbargo.NIT_P, code: 'NIT_P', description: "NIT Entidad Privada" },
        { id: EnumTipoIdentificacionEmbargo.PA, code: 'PA', description: "Pasaporte" },
        { id: EnumTipoIdentificacionEmbargo.TI, code: 'TI', description: "Tarjeta de Identificación" },
        { id: EnumTipoIdentificacionEmbargo.NIT_O, code: 'NIT_O', description: "NIT Entidad Oficial" }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoIdentificacionEmbargo.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoIdentificacionEmbargo.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoIdentificacionEmbargo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoIdentificacionEmbargo;

