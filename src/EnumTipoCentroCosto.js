/**
 * Enumeración de tipocentrocosto.
 */
class EnumTipoCentroCosto {
  static UNICO = 1;
  static TIEMPO = 2;
  static PORCENTAJE = 3;
  static PORCENTAJE_TIEMPO = 4;

  static descriptions = [
    { id: EnumTipoCentroCosto.UNICO, code: "UNICO", description: "Unico" },
    { id: EnumTipoCentroCosto.TIEMPO, code: "TIEMPO", description: "Tiempo" },
    {
      id: EnumTipoCentroCosto.PORCENTAJE,
      code: "PORCENTAJE",
      description: "Porcentaje",
    },
    {
      id: EnumTipoCentroCosto.PORCENTAJE_TIEMPO,
      code: "PORCENTAJE TIEMPO",
      description: "Porcentaje y Tiempo",
    },
  ];
/**
* Obtiene un elemento por su identificador.
* @param {number} id - Identificador del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getById(id) {
    return (
      EnumTipoCentroCosto.descriptions.find((item) => item.id === id) || null
    );
  }
/**
* Obtiene todos los elementos de la enumeración.
* @returns {Array} Lista de objetos con id, code y description.
*/

    static getAll() {
    return EnumTipoCentroCosto.descriptions;
  }
/**
* Obtiene un elemento por su descripción.
* @param {string} description - Descripción del elemento.

     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
*/

    static getByDescription(description) {
    return (
      EnumTipoCentroCosto.descriptions.find(
        (item) => item.description === description
      ) || null
    );
  }
}

module.exports = EnumTipoCentroCosto;
