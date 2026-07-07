class EnumRolTenant {
  static OWNER = 'owner';
  static ADMIN = 'admin';
  static MEMBER = 'member';
  static VIEWER = 'viewer';

  static descriptions = [
    { id: EnumRolTenant.OWNER, code: 'OWNER', description: 'Administrador del cliente' },
    { id: EnumRolTenant.ADMIN, code: 'ADMIN', description: 'Administrador delegado' },
    { id: EnumRolTenant.MEMBER, code: 'MEMBER', description: 'Operador' },
    { id: EnumRolTenant.VIEWER, code: 'VIEWER', description: 'Solo consulta' },
  ];

  static getById(id) {
    return EnumRolTenant.descriptions.find((item) => item.id === id) || null;
  }

  static getAll() {
    return EnumRolTenant.descriptions;
  }

  static isValid(role) {
    return [EnumRolTenant.OWNER, EnumRolTenant.ADMIN, EnumRolTenant.MEMBER, EnumRolTenant.VIEWER].includes(role);
  }

  static canManageTenantUsers(role) {
    return role === EnumRolTenant.OWNER || role === EnumRolTenant.ADMIN;
  }
}

module.exports = EnumRolTenant;
