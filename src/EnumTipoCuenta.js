class EnumTipoCuenta {
    static AHORRO = 1;
    static CORRIENTE = 2;

    static descriptions = [
        { id: EnumTipoCuenta.AHORRO, code: 'AHORRO', description: 'Ahorro' },
        { id: EnumTipoCuenta.CORRIENTE, code: 'CORRIENTE', description: 'Corriente' },
    ];

    static getById(id) {
        return EnumTipoCuenta.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoCuenta.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoCuenta.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoCuenta;

