class EnumEstadoCivil {
  static SOLTERO = 1;
  static CASADO = 2;
  static DIVORCIADO = 3;
  static SEPARADO = 4;
  static VIUDO = 5;
  static UNION_LIBRE = 6;
  static NO_DEFINIDO = 0;

  static descriptions = [
    {
      id: EnumEstadoCivil.SOLTERO,
      code: "SOLTERO",
      description: "Soltero(A)",
      descriptionIngles: "Single",
    },
    {
      id: EnumEstadoCivil.CASADO,
      code: "CASADO",
      description: "Casado(A)",
      descriptionIngles: "Married",
    },
    {
      id: EnumEstadoCivil.DIVORCIADO,
      code: "DIVORCIADO",
      description: "Divorciado(A)",
      descriptionIngles: "Divorced",
    },
    {
      id: EnumEstadoCivil.SEPARADO,
      code: "SEPARADO",
      description: "Separado(A)",
      descriptionIngles: "Separated",
    },
    {
      id: EnumEstadoCivil.VIUDO,
      code: "VIUDO",
      description: "Viudo(A)",
      descriptionIngles: "Widowed",
    },
    {
      id: EnumEstadoCivil.UNION_LIBRE,
      code: "UNION_LIBRE",
      description: "Union Libre",
      descriptionIngles: "Common-law",
    },
    {
      id: EnumEstadoCivil.NO_DEFINIDO,
      code: "NO_DEFINIDO",
      description: "NO Definido",
      descriptionIngles: "Not Defined",
    },
  ];

  static getById(id) {
    return EnumEstadoCivil.descriptions.find((item) => item.id === id) || null;
  }

  static getAll() {
    return EnumEstadoCivil.descriptions;
  }

  static getByDescription(description) {
    return (
      EnumEstadoCivil.descriptions.find(
        (item) => item.description === description
      ) || null
    );
  }

  static colorMapping = {
    primary: EnumEstadoCivil.SOLTERO,
    warning: EnumEstadoCivil.CASADO,
    success: EnumEstadoCivil.DIVORCIADO,
    indigo: EnumEstadoCivil.SEPARADO,
    fuchsia: EnumEstadoCivil.VIUDO,
    emerald: EnumEstadoCivil.UNION_LIBRE,
    danger: EnumEstadoCivil.NO_DEFINIDO, // Default color for unknown states
  };

  static getColors(campo) {
    const colorArray = {};

    for (const [color, description] of Object.entries(
      EnumEstadoCalendario.colorMapping
    )) {
      const descriptionEntry = EnumEstadoCalendario.descriptions.find(
        (item) => item.id === description
      );
      if (descriptionEntry) {
        colorArray[color] = descriptionEntry[campo];
      } else {
        colorArray[color] = null; // Manejar el caso en que el campo no exista
      }
    }
    return colorArray;
  }

  static getColorName(campo, valor) {
    const colors = EnumEstadoCalendario.getColors(campo);
    return Object.keys(colors).find((color) => colors[color] === valor);
  }
}

module.exports = EnumEstadoCivil;
