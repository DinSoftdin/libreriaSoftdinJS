/**
 * Enumeración de módulos del sistema (contratación, liquidaciones, préstamos).
 */
class EnumModulos {
  static CONTRATACION = 1;
  static LIQ_NOMINA = 2;
  static LIQ_VACACIONES = 3;
  static LIQ_PRESTSOCIALES = 4;
  static LIQ_CONTRATO = 5;
  static PRESTAMO = 6;
  // static SaldosIniciales = 14;

  static descriptions = [
    {
      id: EnumModulos.CONTRATACION,
      code: "CONTRATACION",
      description: "Contratación",
    },
    {
      id: EnumModulos.LIQ_NOMINA,
      code: "LIQ_NOMINA",
      description: "Liquidación de Nómina",
    },
    {
      id: EnumModulos.LIQ_VACACIONES,
      code: "LIQ_VACACIONES",
      description: "Liquidación de Vacaciones",
    },
    {
      id: EnumModulos.LIQ_PRESTSOCIALES,
      code: "LIQ_PRESTSOCIALES",
      description: "Liquidación de Prestaciones Sociales",
    },
    {
      id: EnumModulos.LIQ_CONTRATO,
      code: "LIQ_CONTRATO",
      description: "Liquidación de Contrato",
    },
    {
      id: EnumModulos.PRESTAMO,
      code: "PRESTAMO",
      description: "Préstamo",
    }
  ];

  /**
   * Obtiene un elemento por su identificador.
   * @param {number} id - Identificador del elemento.
   * @returns {Object|null} El objeto con id, code y description, o null si no existe.
   */
  static getById(id) {
    return EnumModulos.descriptions.find((item) => item.id === id) || null;
  }

  /**
   * Obtiene todos los elementos de la enumeración.
   * @returns {Array} Lista de objetos con id, code y description.
   */
  static getAll() {
    return EnumModulos.descriptions;
  }

  /**
   * Obtiene un elemento por su descripción.
   * @param {string} description - Descripción del elemento.
   * @returns {Object|null} El objeto con id, code y description, o null si no existe.
   */
  static getByDescription(description) {
    return (
      EnumModulos.descriptions.find(
        (item) => item.description === description
      ) || null
    );
  }
}

module.exports = EnumModulos;
