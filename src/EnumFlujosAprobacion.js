/**
 * Formularios que interactúan con flujos de aprobación.
 *
 * El valor de cada constante es el `code` de la definición en `workflow_definitions`,
 * columna entera, y debe coincidir con el que usa el formulario al iniciar el workflow.
 *
 * El campo `code` del array es el identificador de texto con el que cada flujo se
 * persistía antes de que la columna pasara a entero. Se conserva tal cual — de ahí la
 * mezcla de mayúsculas y minúsculas — porque es lo que permite traducir a id tanto los
 * datos históricos como el `workflow_templates.code` del que salen NOVEDAD_NOMINA y
 * VINCULACION, y porque la interfaz lo muestra junto a la descripción.
 */
class EnumFlujosAprobacion {
  static SOLICITUD_VACANTE = 1;
  static PERFIL_CARGO = 2;
  static NOVEDAD_NOMINA = 3;
  static VINCULACION = 4;

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
    // Vienen de `workflow_templates` (BD central), de ahi el code en minusculas.
    {
      id: EnumFlujosAprobacion.NOVEDAD_NOMINA,
      code: "novedad_nomina",
      description: "Novedad de nómina",
    },
    {
      id: EnumFlujosAprobacion.VINCULACION,
      code: "vinculacion",
      description: "Vinculación",
    },
  ];

  /**
   * Obtiene un elemento por su id, que es el código del flujo persistido.
   * @param {number} id - Identificador del elemento.
   * @returns {Object|null} El objeto con id, code y description, o null si no existe.
   */
  static getById(id) {
    return (
      EnumFlujosAprobacion.descriptions.find((item) => item.id === id) || null
    );
  }

  /**
   * Obtiene un elemento por su etiqueta legible.
   * @param {string} code - Etiqueta del flujo (ej. SOLICITUD_VACANTE).
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
   * Códigos válidos de flujo, que es lo que se persiste.
   * @returns {number[]}
   */
  static getIds() {
    return EnumFlujosAprobacion.descriptions.map((item) => item.id);
  }

  /**
   * Etiquetas legibles de los flujos. No son lo que se guarda: para eso, getIds().
   * @returns {string[]}
   */
  static getCodes() {
    return EnumFlujosAprobacion.descriptions.map((item) => item.code);
  }

  /**
   * Indica si el código de flujo corresponde a un formulario con flujo de aprobación.
   * @param {number} id - Código del flujo.
   * @returns {boolean}
   */
  static isValid(id) {
    return EnumFlujosAprobacion.getById(id) !== null;
  }

  /**
   * Igual que isValid() pero sobre la etiqueta legible.
   * @param {string} code - Etiqueta del flujo.
   * @returns {boolean}
   */
  static isValidCode(code) {
    return EnumFlujosAprobacion.getByCode(code) !== null;
  }
}

module.exports = EnumFlujosAprobacion;
