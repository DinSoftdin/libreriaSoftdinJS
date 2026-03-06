/**
 * Enumeración de ne status.
 */
class EnumNE_Status {
  static Validas = 1;
  static Pendientes = 2;
  static Erroneas = 3;
  static Rechazadas = 4;
  static Aceptadas = 5;

  static descriptions = [
    { id: EnumNE_Status.Validas, code: 'VAL', description: 'Válidas' },
    { id: EnumNE_Status.Pendientes, code: 'PEN', description: 'Pendientes' },
    { id: EnumNE_Status.Erroneas, code: 'ERR', description: 'Erróneas' },
    { id: EnumNE_Status.Rechazadas, code: 'REC', description: 'Rechazadas' },
    { id: EnumNE_Status.Aceptadas, code: 'ACE', description: 'Aceptadas' },
  ];

  static colorMapping = {
    'primary': EnumNE_Status.Validas,
    'warning': EnumNE_Status.Pendientes,
    'success': EnumNE_Status.Aceptadas,
    'danger': EnumNE_Status.Rechazadas,
    'lime': EnumNE_Status.Erroneas, // Default color for unknown states
  };
/**
* Obtiene un objeto con el mapeo de colores al valor del campo especificado.
* @param {string} campo - Nombre del campo a extraer.

     * @returns {Object} Objeto con claves de color y valores del campo.
*/

    static getColors(campo) {
    const colorArray = {};

    for (const [color, description] of Object.entries(EnumNE_Status.colorMapping)) {
      const descriptionEntry = EnumNE_Status.descriptions.find(item => item.id === description);
      if (descriptionEntry) {
        colorArray[color] = descriptionEntry[campo];
      } else {
        colorArray[color] = null; // Manejar el caso en que el campo no exista
      }
    }
    return colorArray;
  }
/**
* Obtiene la colección completa de elementos.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getCollection() {
    return EnumNE_Status.descriptions;
  }
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
    return EnumNE_Status.getCollection().find(item => item.id === id) || null;
  }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
    return EnumNE_Status.descriptions;
  }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
    return EnumNE_Status.getCollection().find(item => item.description === description) || null;
  }
/**
* Obtiene el nombre del color asociado a un valor del campo especificado.
* @param {string} campo - Nombre del campo a consultar.

     * @param {*} valor - Valor a buscar.

     * @returns {string|undefined} Nombre del color o undefined si no se encuentra.
*/

    static getColorName(campo, valor) {
    const colors = EnumNE_Status.getColors(campo);
    return Object.keys(colors).find(color => colors[color] === valor);
  }
}

module.exports = EnumNE_Status;