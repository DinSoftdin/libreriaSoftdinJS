class EnumTipoRegimen {
    static SIMPLIFICADO = 1;
    static COMUN = 2;
    static GRAN_CONTRIBUYENTE = 3;

    static descriptions = [
        { id: EnumTipoRegimen.SIMPLIFICADO, code: 'SIMPLIFICADO', description: 'Simplificado' },
        { id: EnumTipoRegimen.COMUN, code: 'COMUN', description: 'Común' },
        { id: EnumTipoRegimen.GRAN_CONTRIBUYENTE, code: 'GRAN_CONTRIBUYENTE', description: 'Gran Contribuyente' }
    ];

    static getById(id) {
        return EnumTipoRegimen.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoRegimen.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoRegimen.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegimen;
