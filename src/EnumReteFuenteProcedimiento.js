class EnumReteFuenteProcedimiento {
    static PROCED_UNO = 1;
    static PROCED_DOS = 2;

    static descriptions = [
        { id: EnumReteFuenteProcedimiento.PROCED_UNO, code: 'PROCED1', description: 'Procedimiento UNO' },
        { id: EnumReteFuenteProcedimiento.PROCED_DOS, code: 'PROCED2', description: 'Procedimiento DOS' },
    ];

    static getById(id) {
        return EnumReteFuenteProcedimiento.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumReteFuenteProcedimiento.descriptions;
    }

    static getByDescription(description) {
        return EnumReteFuenteProcedimiento.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumReteFuenteProcedimiento;

