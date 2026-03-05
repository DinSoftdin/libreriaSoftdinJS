class EnumAreaTrabajo {
    static ADMINISTRATIVO = 1;
    static OPERATIVO = 2;

    static descriptions = [
        { id: EnumAreaTrabajo.ADMINISTRATIVO, code: 'ADMINISTRATIVO', description: 'Administrativo' },
        { id: EnumAreaTrabajo.OPERATIVO, code: 'OPERATIVO', description: 'Operativo' },
    ];

    static getById(id) {
        return EnumAreaTrabajo.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumAreaTrabajo.descriptions;
    }

    static getByDescription(description) {
        return EnumAreaTrabajo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumAreaTrabajo;