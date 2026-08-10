/**
 * Formularios que interactúan con flujos de aprobación.
 *
 * El valor de cada constante es el `code` de la definición en `workflow_definitions`
 * y debe coincidir con el que usa el formulario al iniciar el workflow.
 */
class EnumFlujosAprobacion {
  static SOLICITUD_VACANTE = "SOLICITUD_VACANTE";
  static PERFIL_CARGO = "PERFIL_CARGO";

  static descriptions = [
    {
      id: EnumFlujosAprobacion.SOLICITUD_VACANTE,
      code: "SOLICITUD_VACANTE",
      description: "Solicitud de Vacante",
    },
    {
      id: EnumFlujosAprobacion.PERFIL_CARGO,
      code: "PERFIL_CARGO",
      description: "Perfil de Cargo",
    },
  ];

  /**
   * Obtiene un elemento por su identificador (código del flujo).
   * @param {string} id - Identificador del elemento.
   * @returns {Object|null} El objeto con id, code y description, o null si no existe.
   */
  static getById(id) {
    return (
      EnumFlujosAprobacion.descriptions.find((item) => item.id === id) || null
    );
  }

  /**
   * Obtiene un elemento por su código de flujo.
   * @param {string} code - Código del flujo (ej. SOLICITUD_VACANTE).
   * @returns {Object|null} El objeto con id, code y description, o null si no existe.
   */
  static getByCode(code) {
    return (
      EnumFlujosAprobacion.descriptions.find((item) => item.code === code) ||
      null
    );
  }

  /**
   * Obtiene todos los elementos de la enumeración.
   * @returns {Array} Lista de objetos con id, code y description.
   */
  static getAll() {
    return EnumFlujosAprobacion.descriptions;
  }

  /**
   * Obtiene un elemento por su descripción.
   * @param {string} description - Descripción del elemento.
   * @returns {Object|null} El objeto con id, code y description, o null si no existe.
   */
  static getByDescription(description) {
    return (
      EnumFlujosAprobacion.descriptions.find(
        (item) => item.description === description,
      ) || null
    );
  }

  /**
   * Códigos válidos de formularios con flujo de aprobación.
   * @returns {string[]}
   */
  static getCodes() {
    return EnumFlujosAprobacion.descriptions.map((item) => item.code);
  }

  /**
   * Indica si el código corresponde a un formulario con flujo de aprobación.
   * @param {string} code - Código del flujo.
   * @returns {boolean}
   */
  static isValid(code) {
    return EnumFlujosAprobacion.getByCode(code) !== null;
  }
}

module.exports = EnumFlujosAprobacion;
