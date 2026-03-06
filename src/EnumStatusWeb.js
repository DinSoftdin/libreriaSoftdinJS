/**
 * Enumeración de estados en la aplicación web (inicio, proceso, aprobado, anulado).
 */
class EnumStatusWeb {
    static INICIO = 1;
    static PROCESO = 2;
    static APROBADO = 3;
    static ANULADO = 4;

    static descriptions = [
        { id: EnumStatusWeb.INICIO, code: 'INICIO', description: 'Inicio' },
        { id: EnumStatusWeb.PROCESO, code: 'PROCESO', description: 'Proceso' },
        { id: EnumStatusWeb.APROBADO, code: 'APROBADO', description: 'Aprobado' },
        { id: EnumStatusWeb.ANULADO, code: 'ANULADO', description: 'Anulado' },
    ];
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/
    static getCollection() {
        return EnumStatusWeb.descriptions;
    }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/
    static getById(id) {
        return EnumStatusWeb.getCollection().find(item => item.id === id) || null;
    }

    static colorMapping = {
        'primary': EnumStatusWeb.INICIO,
        'warning': EnumStatusWeb.PROCESO,
        'success': EnumStatusWeb.APROBADO,
        'danger': EnumStatusWeb.ANULADO, // Default color for unknown states
    };
/**
* Obtiene un objeto con el mapeo de colores al valor del campo especificado.
* @param {string} campo - Nombre del campo a extraer.

     * @returns {Object} Objeto con claves de color y valores del campo.
*/
    static getColors(campo) {
        const colorArray = {};

        for (const [color, description] of Object.entries(EnumStatusWeb.colorMapping)) {
            const descriptionEntry = EnumStatusWeb.descriptions.find(item => item.id === description);
            if (descriptionEntry) {
                colorArray[color] = descriptionEntry[campo];
            } else {
                colorArray[color] = null; // Manejar el caso en que el campo no exista
            }
        }
        return colorArray;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/
    static getAll() {
        return EnumStatusWeb.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/
    static getByDescription(description) {
        return EnumStatusWeb.getCollection().find(item => item.description === description) || null;
    }
/**
* Obtiene el nombre del color asociado a un valor del campo especificado.
* @param {string} campo - Nombre del campo a consultar.

     * @param {*} valor - Valor a buscar.

     * @returns {string|undefined} Nombre del color o undefined si no se encuentra.
*/
    static getColorName(campo, valor) {
        const colors = EnumStatusWeb.getColors(campo);
        return Object.keys(colors).find(color => colors[color] === valor);
    }
}

module.exports = EnumStatusWeb;