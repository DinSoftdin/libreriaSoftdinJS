/**
 * Enumeración de tipocentrocosto.
 */
class EnumTipoCentroCosto {
  static NO_APLICA = 0;
  static UNICO = 1;
  static TIEMPO = 2;
  static PORCENTAJE = 3;
  static PORCENTAJE_TIEMPO = 4;

  static descriptions = [
    { id: 0, code: "NO_APLICA", description: "No aplica" },
    { id: 1, code: "UNICO", description: "Unico" },
    { id: 2, code: "TIEMPO", description: "Tiempo" },
    { id: 3, code: "PORCENTAJE", description: "Porcentaje" },
    { id: 4, code: "PORCENTAJE TIEMPO", description: "Porcentaje y Tiempo" },
  ];

  /**
   * Obtiene un elemento por su identificador.
   * @param {number} id - Identificador del elemento.
   * @returns {Object|null} El objeto con id, code y description, o null si no existe.
   */
  static getById(id) {
    const needle = Number(id);
    return (
      EnumTipoCentroCosto.descriptions.find((item) => item.id === needle) || null
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
