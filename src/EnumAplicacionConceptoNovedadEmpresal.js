class EnumAplicacionConceptoNovedadEmpresal {
    static INDIVIDUAL = 1;
    static TODOS = 2;
    static AGRUPAR = 3;

    static descriptions = [
        { id: EnumAplicacionConceptoNovedadEmpresal.INDIVIDUAL, code: 'INDIVIDUAL', description: 'Individual' },
        { id: EnumAplicacionConceptoNovedadEmpresal.TODOS, code: 'TODOS', description: 'Todos' },
        { id: EnumAplicacionConceptoNovedadEmpresal.AGRUPAR, code: 'AGRUPAR', description: 'Agrupar' },
    ];

    static getById(id) {
        return EnumAplicacionConceptoNovedadEmpresal.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumAplicacionConceptoNovedadEmpresal.descriptions;
    }

    static getByDescription(description) {
        return EnumAplicacionConceptoNovedadEmpresal.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumAplicacionConceptoNovedadEmpresal;