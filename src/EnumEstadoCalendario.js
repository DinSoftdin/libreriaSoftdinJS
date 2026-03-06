/**
 * Enumeración de estadocalendario.
 */
class EnumEstadoCalendario {
    static NORMAL = 1;
    static FERIADO = 2;

    static descriptions = [
        { id: EnumEstadoCalendario.NORMAL, code: 'NORMAL', description: 'Normal' },
        { id: EnumEstadoCalendario.FERIADO, code: 'FERIADO', description: 'Feriado' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumEstadoCalendario.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumEstadoCalendario.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumEstadoCalendario.descriptions.find(item => item.description === description) || null;
    }

    static colorMapping = {
        'primary': EnumEstadoCalendario.NORMAL,
        'danger': EnumEstadoCalendario.FERIADO, // Default color for unknown states
    };
/**
* Obtiene un objeto con el mapeo de colores al valor del campo especificado.
* @param {string} campo - Nombre del campo a extraer.

     * @returns {Object} Objeto con claves de color y valores del campo.
*/

    static getColors(campo) {
        const colorArray = {};

        for (const [color, description] of Object.entries(EnumEstadoCalendario.colorMapping)) {
            const descriptionEntry = EnumEstadoCalendario.descriptions.find(item => item.id === description);
            if (descriptionEntry) {
                colorArray[color] = descriptionEntry[campo];
            } else {
                colorArray[color] = null; // Manejar el caso en que el campo no exista
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
        const colors = EnumEstadoCalendario.getColors(campo);
        return Object.keys(colors).find(color => colors[color] === valor);
    }
}

module.exports = EnumEstadoCalendario;