class EnumTipoCuota {
    static QUINCENAL = 1;
    static MENSUAL = 2;

    static descriptions = [
        { id: EnumTipoCuota.QUINCENAL, code: 'QUINCENAL', description: 'Quincenal' },
        { id: EnumTipoCuota.MENSUAL, code: 'MENSUAL', description: 'Mensual' },
    ];

    static getById(id) {
        return EnumTipoCuota.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoCuota.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoCuota.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoCuota;

