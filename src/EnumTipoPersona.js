class EnumTipoPersona {
    static NATURAL = 1;
    static JURIDICA = 2;

    static descriptions = [
        { id: EnumTipoPersona.NATURAL, code: 'NAT', description: 'Natural' },
        { id: EnumTipoPersona.JURIDICA, code: 'JUR', description: 'Jurídica' }
    ];

    static getById(id) {
        return EnumTipoPersona.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoPersona.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoPersona.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoPersona;
