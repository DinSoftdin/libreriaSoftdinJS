class EnumTipoPagoLiquidacion {
    static NOMINA = 1;
    static TESORERIA = 2;
    static FONDO = 3;
    static AHORRO = 4;

    static descriptions = [
        { id: EnumTipoPagoLiquidacion.NOMINA, code: 'NOMINA', description: 'Nómina' },
        { id: EnumTipoPagoLiquidacion.TESORERIA, code: 'TESORERIA', description: 'Tesorería' },
        { id: EnumTipoPagoLiquidacion.FONDO, code: 'FONDO', description: 'Fondo' },
        { id: EnumTipoPagoLiquidacion.AHORRO, code: 'AHORRO', description: 'Ahorro' }
    ];

    static getById(id) {
        return EnumTipoPagoLiquidacion.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoPagoLiquidacion.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoPagoLiquidacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoPagoLiquidacion;
