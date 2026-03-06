/**
 * Enumeración de regimenexcepcionsss.
 */
class EnumRegimenExcepcionSSS {
    static No_Aplica = 0;
    static Decreto_1828_Artc_7 = 1;

    static descriptions = [
        { id: EnumRegimenExcepcionSSS.No_Aplica, code: 'No_Aplica', description: 'No Aplica' },
        { id: EnumRegimenExcepcionSSS.Decreto_1828_Artc_7, code: 'Decreto_1828_Artc_7', description: 'Decreto 1828 Artículo 7' },
    ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
        return EnumRegimenExcepcionSSS.descriptions.find(item => item.id === id) || null;
    }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
        return EnumRegimenExcepcionSSS.descriptions;
    }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
        return EnumRegimenExcepcionSSS.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumRegimenExcepcionSSS;
