class EnumTipoMovimiento {
    static INGRESO = 1;
    static DESCUENTO = 2;

    static descriptions = [
        { id: EnumTipoMovimiento.INGRESO, code: 'INGRESO', description: 'Ingreso' },
        { id: EnumTipoMovimiento.DESCUENTO, code: 'DESCUENTO', description: 'Descuento' }
    ];


    static getById(id) {
        return EnumTipoMovimiento.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoMovimiento.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoMovimiento.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoMovimiento;

