/**
 * Roles de acceso al tenant.
 *
 * El `id` es lo que se persiste (`tenant_user.role` en la central y
 * `usuarios.rol_acceso` en la del tenant, ambas enteras). El `code` es solo
 * etiqueta legible para la interfaz.
 */
class EnumRolTenant {
  static OWNER = 1;
  static ADMIN = 2;
  static MEMBER = 3;
  static VIEWER = 4;

  static descriptions = [
    {
      id: EnumRolTenant.OWNER,
      code: "OWNER",
      description: "Administrador del cliente",
    },
    {
      id: EnumRolTenant.ADMIN,
      code: "ADMIN",
      description: "Administrador delegado",
    },
    { id: EnumRolTenant.MEMBER, code: "MEMBER", description: "Operador" },
    { id: EnumRolTenant.VIEWER, code: "VIEWER", description: "Solo consulta" },
  ];

  static getById(id) {
    return EnumRolTenant.descriptions.find((item) => item.id === id) || null;
  }

  static getAll() {
    return EnumRolTenant.descriptions;
  }

  /**
   * Ids validos de rol, en orden de privilegio.
   * @returns {number[]}
   */
  static getIds() {
    return [
      EnumRolTenant.OWNER,
      EnumRolTenant.ADMIN,
      EnumRolTenant.MEMBER,
      EnumRolTenant.VIEWER,
    ];
  }

  /**
   * @param {number} role
   * @returns {boolean}
   */
  static isValid(role) {
    return EnumRolTenant.getIds().includes(role);
  }

  static canManageTenantUsers(role) {
    return role === EnumRolTenant.OWNER || role === EnumRolTenant.ADMIN;
  }
}

module.exports = EnumRolTenant;
