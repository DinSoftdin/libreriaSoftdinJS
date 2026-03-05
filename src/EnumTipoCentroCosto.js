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

  static getById(id) {
    return (
      EnumTipoCentroCosto.descriptions.find((item) => item.id === id) || null
    );
  }

  static getAll() {
    return EnumTipoCentroCosto.descriptions;
  }

  static getByDescription(description) {
    return (
      EnumTipoCentroCosto.descriptions.find(
        (item) => item.description === description
      ) || null
    );
  }
}

module.exports = EnumTipoCentroCosto;
