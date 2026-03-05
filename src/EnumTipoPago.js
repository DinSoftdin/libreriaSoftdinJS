class EnumTipoPago {
    static COMERCIAL = 1;
    static CALENDARIO = 2;

    static descriptions = [
        { id: EnumTipoPago.COMERCIAL, code: 'COMERCIAL', description: 'Comercial' },
        { id: EnumTipoPago.CALENDARIO, code: 'CALENDARIO', description: 'Calendario' },
    ];

    static getById(id) {
        return EnumTipoPago.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoPago.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoPago.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoPago;
