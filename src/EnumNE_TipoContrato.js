/**
 * Enumeración de ne tipocontrato.
 */
class EnumNE_TipoContrato {
    static Termino_Fijo = 1;
    static Termino_Indefinido = 2;
    static Obra_Labor = 3;
    static Aprendizaje = 4;
    static Practicas_Pasantias = 5;

    static descriptions = [
        { id: EnumNE_TipoContrato.Termino_Fijo, code: 'Termino_Fijo', description: 'Termino Fijo' },
        { id: EnumNE_TipoContrato.Termino_Indefinido, code: 'Termino_Indefinido', description: 'Termino Indefinido' },
        { id: EnumNE_TipoContrato.Obra_Labor, code: 'Obra_Labor', description: 'Obra Labor' },
        { id: EnumNE_TipoContrato.Aprendizaje, code: 'Aprendizaje', description: 'Aprendizaje' },
        { id: EnumNE_TipoContrato.Practicas_Pasantias, code: 'Practicas_Pasantias', description: 'Prácticas o Pasantías' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
        return EnumNE_TipoContrato.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumNE_TipoContrato.getCollection().find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumNE_TipoContrato.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumNE_TipoContrato.getCollection().find(item => item.description === description) || null;
    }

    // static NE_TipoDocumento(tipodocumento) {
    //     const mapeo = {
    //         [EnumTipoIdentificacion.CC]: EnumNE_TipoContrato.Cedula_ciudadania,
    //         [EnumTipoIdentificacion.CE]: EnumNE_TipoContrato.Cedula_extranjeria,
    //         [EnumTipoIdentificacion.NI]: EnumNE_TipoContrato.NIT,
    //         [EnumTipoIdentificacion.PA]: EnumNE_TipoContrato.Pasaporte,
    //         [EnumTipoIdentificacion.RC]: EnumNE_TipoContrato.Registro_civil,
    //         [EnumTipoIdentificacion.TI]: EnumNE_TipoContrato.Tarjeta_identidad,
    //     };

    //     if (Object.keys(mapeo).includes(tipodocumento)) {
    //         return mapeo[tipodocumento];
    //     } else {
    //         throw new Error("Tipo de documento no implementado: " + tipodocumento);
    //     }
}

module.exports = EnumNE_TipoContrato;