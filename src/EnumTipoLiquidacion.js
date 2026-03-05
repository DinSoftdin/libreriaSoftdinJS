class EnumTipoLiquidacion {
    static LEY = 1;
    static PROVISIONES = 2;

    static descriptions = [
        { id: EnumTipoLiquidacion.LEY, code: 'LEY', description: "Ley" },
        { id: EnumTipoLiquidacion.PROVISIONES, code: 'PROVISIONES', description: "Provisiones" }
    ];

    static getById(id) {
        return EnumTipoLiquidacion.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoLiquidacion.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoLiquidacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoLiquidacion;

