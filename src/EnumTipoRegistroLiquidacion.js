class EnumTipoRegistroLiquidacion {
    static ANTICIPO = 1;
    static PAGO = 2;
    static PAGO_SD = 3;

    static descriptions = [
        { id: EnumTipoRegistroLiquidacion.ANTICIPO, code: 'ANTICIPO', description: 'Anticipo' },
        { id: EnumTipoRegistroLiquidacion.PAGO, code: 'PAGO', description: 'Pago' },
        { id: EnumTipoRegistroLiquidacion.PAGO_SD, code: 'PAGO_SD', description: 'Pago SD' }
    ];

    static getById(id) {
        return EnumTipoRegistroLiquidacion.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoRegistroLiquidacion.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoRegistroLiquidacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegistroLiquidacion;

