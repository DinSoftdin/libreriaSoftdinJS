/**
 * Enumeración de respuestasino.
 */
class EnumRespuestaSINO {
    static SI = 1;
    static NO = 0;

    static descriptions = [
        { id: EnumRespuestaSINO.SI, code: 'SI', description: 'Sí', description2: true },
        { id: EnumRespuestaSINO.NO, code: 'NO', description: 'No', description2: false },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumRespuestaSINO.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumRespuestaSINO.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumRespuestaSINO.descriptions.find(item => item.description === description) || null;
    }

    static colorMapping = [
        { 'success': EnumRespuestaSINO.SI },
        { 'danger': EnumRespuestaSINO.NO },
    ];
/**
* Obtiene un objeto con el mapeo de colores al valor del campo especificado.
* @param {string} campo - Nombre del campo a extraer.

     * @returns {Object} Objeto con claves de color y valores del campo.
*/

    static getColors(campo) {
        const colorArray = {};

        for (const color of EnumRespuestaSINO.colorMapping) {
            const description = Object.values(color)[0];
            const descriptionEntry = EnumRespuestaSINO.descriptions.find(item => item.id === description);
            if (descriptionEntry) {
                colorArray[Object.keys(color)[0]] = descriptionEntry[campo];
            } else {
                colorArray[Object.keys(color)[0]] = null; // Handle the case where the field does not exist
            }
        }
        return colorArray;
    }
/**
* Obtiene el nombre del color asociado a un valor del campo especificado.
* @param {string} campo - Nombre del campo a consultar.

     * @param {*} valor - Valor a buscar.

     * @returns {string|undefined} Nombre del color o undefined si no se encuentra.
*/

    static getColorName(campo, valor) {
        const colors = EnumRespuestaSINO.getColors(campo);
        return Object.keys(colors).find(key => colors[key] === valor);
    }

}

module.exports = EnumRespuestaSINO;
