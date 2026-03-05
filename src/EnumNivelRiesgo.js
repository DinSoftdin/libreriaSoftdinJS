class EnumNivelRiesgo {
  static RIESGO_I = 1;
  static RIESGO_II = 2;
  static RIESGO_III = 3;
  static RIESGO_IV = 4;
  static RIESGO_V = 5;

  static descriptions = [
    {
      id: EnumNivelRiesgo.RIESGO_I,
      code: 0.522,
      description: "Riesgo I",
    },
    {
      id: EnumNivelRiesgo.RIESGO_II,
      code: 1.044,
      description: "Riesgo II",
    },
    {
      id: EnumNivelRiesgo.RIESGO_III,
      code: 2.436,
      description: "Riesgo III",
    },
    {
      id: EnumNivelRiesgo.RIESGO_IV,
      code: 4.35,
      description: "Riesgo IV",
    },
    { id: EnumNivelRiesgo.RIESGO_V, code: 6.960, description: "Riesgo V" },
  ];

  static getById(id) {
    return EnumNivelRiesgo.descriptions.find((item) => item.id === id) || null;
  }

  static getAll() {
    return EnumNivelRiesgo.descriptions;
  }

  static getByDescription(description) {
    return (
      EnumNivelRiesgo.descriptions.find(
        (item) => item.description === description
      ) || null
    );
  }
}

module.exports = EnumNivelRiesgo;
