class EnumTipoConceptoMO {
    static DEFAULT = 1;
    static ADICIONAL = 2;

    static descriptions = [
        { id: EnumTipoConceptoMO.DEFAULT, code: 'DEFAULT', description: 'Default' },
        { id: EnumTipoConceptoMO.ADICIONAL, code: 'ADICIONAL', description: 'Adicional' },
    ];

    static getById(id) {
        return EnumTipoConceptoMO.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoConceptoMO.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoConceptoMO.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoConceptoMO;
