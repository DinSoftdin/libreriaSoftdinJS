/**
 * Enumeración de tipocontrato.
 */
class EnumTipoContrato {
    /**
     * Los identificadores coinciden con `EnumNE_TipoContrato`, que es el
     * catalogo que exige la DIAN en nomina electronica. Se alinearon a proposito:
     * antes 3 y 4 estaban cruzados —aqui APRENDIZAJE=3 y OBRA_LABOR=4, alla
     * Obra_Labor=3 y Aprendizaje=4— y cualquier mapeo que pasara el id directo
     * reportaba aprendices como obra o labor.
     *
     * Se movio este enum y no el de la DIAN porque esos codigos son externos:
     * no se eligen. El precio fue un intercambio de datos: los ids 3 y 4 se
     * cruzan en `contratos.tipocontrato` de cada tenant con el comando
     * `tenants:alinear-tipocontrato-dian` de softdin-api, que **no es
     * idempotente** —correrlo dos veces deshace el intercambio— y que se niega a
     * ejecutarse si la libreria instalada no trae ya esta numeracion. Por eso
     * este valor no se debe volver a cambiar sin intercambiar los datos que lo
     * guardan.
     *
     *   EnumTipoContrato          EnumNE_TipoContrato
     *   FIJO                = 1   Termino_Fijo        = 1
     *   INDEFINIDO          = 2   Termino_Indefinido  = 2
     *   OBRA_LABOR          = 3   Obra_Labor          = 3
     *   APRENDIZAJE         = 4   Aprendizaje         = 4
     *   PRACTICAS_PASANTIAS = 5   Practicas_Pasantias = 5
     *
     * `ASOCIACION` queda comentado porque no tiene equivalente en el catalogo
     * DIAN: un contrato de asociacion no se puede reportar.
     */
    static FIJO = 1;
    static INDEFINIDO = 2;
    static OBRA_LABOR = 3;
    static APRENDIZAJE = 4;
    static PRACTICAS_PASANTIAS = 5;
    // static ASOCIACION = 6; // sin equivalente en el catalogo DIAN

    static descriptions = [
        { id: EnumTipoContrato.FIJO, code: 'FIJO', description: 'Fijo' },
        { id: EnumTipoContrato.INDEFINIDO, code: 'INDEFINIDO', description: 'Indefinido' },
        { id: EnumTipoContrato.OBRA_LABOR, code: 'OBRA_LABOR', description: 'Obra o Labor' },
        { id: EnumTipoContrato.APRENDIZAJE, code: 'APRENDIZAJE', description: 'Aprendizaje' },
        { id: EnumTipoContrato.PRACTICAS_PASANTIAS, code: 'PRACTICAS_PASANTIAS', description: 'Prácticas o Pasantías' }
        // { id: EnumTipoContrato.ASOCIACION, code: 'ASOCIACION', description: 'Asociación' }
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumTipoContrato.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumTipoContrato.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumTipoContrato.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoContrato;

