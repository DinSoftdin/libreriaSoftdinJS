class EnumNE_Vacaciones {
    static VC = 1;
    static VCP = 2;

    static descriptions = [
        { id: EnumNE_Vacaciones.VC, code: 'VC', description: 'Vacaciones Comunes' },
        { id: EnumNE_Vacaciones.VCP, code: 'VCP', description: 'Vacaciones Compensadas' },
    ];

    static getCollection() {
        return EnumNE_Vacaciones.descriptions;
    }

    static getById(id) {
        return EnumNE_Vacaciones.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_Vacaciones.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_Vacaciones.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_Vacaciones;