class EnumNE_FormaPago {
    static Contado = 1;

    static descriptions = [
        { id: EnumNE_FormaPago.Contado, code: 'Contado', description: 'Contado' },
    ];

    static getCollection() {
        return EnumNE_FormaPago.descriptions;
    }

    static getById(id) {
        return EnumNE_FormaPago.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_FormaPago.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_FormaPago.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_FormaPago;