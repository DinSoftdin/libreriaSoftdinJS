class EnumNE_PeriodoNomina {
    static Semanal = 1;
    static Decenal = 2;
    static Catorcenal = 3;
    static Quincenal = 4;
    static Mensual = 5;
    static Otro = 6;

    static descriptions = [
        { id: EnumNE_PeriodoNomina.Semanal, code: 'Semanal', description: 'Semanal' },
        { id: EnumNE_PeriodoNomina.Decenal, code: 'Decenal', description: 'Decenal' },
        { id: EnumNE_PeriodoNomina.Catorcenal, code: 'Catorcenal', description: 'Catorcenal' },
        { id: EnumNE_PeriodoNomina.Quincenal, code: 'Quincenal', description: 'Quincenal' },
        { id: EnumNE_PeriodoNomina.Mensual, code: 'Mensual', description: 'Mensual' },
        { id: EnumNE_PeriodoNomina.Otro, code: 'Otro', description: 'Otro' },
    ];

    static getCollection() {
        return EnumNE_PeriodoNomina.descriptions;
    }

    static getById(id) {
        return EnumNE_PeriodoNomina.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_PeriodoNomina.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_PeriodoNomina.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_PeriodoNomina;
