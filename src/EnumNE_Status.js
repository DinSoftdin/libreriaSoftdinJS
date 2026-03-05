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

  static getCollection() {
    return EnumNE_Status.descriptions;
  }

  static getById(id) {
    return EnumNE_Status.getCollection().find(item => item.id === id) || null;
  }

  static getAll() {
    return EnumNE_Status.descriptions;
  }

  static getByDescription(description) {
    return EnumNE_Status.getCollection().find(item => item.description === description) || null;
  }

  static getColorName(campo, valor) {
    const colors = EnumNE_Status.getColors(campo);
    return Object.keys(colors).find(color => colors[color] === valor);
  }
}

module.exports = EnumNE_Status;