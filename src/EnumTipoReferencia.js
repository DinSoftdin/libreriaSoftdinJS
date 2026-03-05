class EnumTipoReferencia {
    static PERSONAL = 1;
    static FAMILIAR = 2;

    static descriptions = [
        { id: EnumTipoReferencia.PERSONAL, code: 'PERSONAL', description: 'Personal' },
        { id: EnumTipoReferencia.FAMILIAR, code: 'FAMILIAR', description: 'Familiar' }
    ];

    static getById(id) {
        return EnumTipoReferencia.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoReferencia.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoReferencia.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoReferencia;
