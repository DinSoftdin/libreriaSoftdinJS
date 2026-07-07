class EnumPermisosFormulario {
  static CONSULTAR = 1;
  static CREAR = 2;
  static MODIFICAR = 3;
  static ELIMINAR = 4;

  static descriptions = [
    { id: EnumPermisosFormulario.CONSULTAR, code: 'CONSULTAR', description: 'Consultar' },
    { id: EnumPermisosFormulario.CREAR, code: 'CREAR', description: 'Crear' },
    { id: EnumPermisosFormulario.MODIFICAR, code: 'MODIFICAR', description: 'Modificar' },
    { id: EnumPermisosFormulario.ELIMINAR, code: 'ELIMINAR', description: 'Eliminar' },
  ];

  static getById(id) {
    return EnumPermisosFormulario.descriptions.find((item) => item.id === id) || null;
  }

  static getAll() {
    return EnumPermisosFormulario.descriptions;
  }

  static getByDescription(description) {
    return (
      EnumPermisosFormulario.descriptions.find((item) => item.description === description) || null
    );
  }
}

module.exports = EnumPermisosFormulario;
