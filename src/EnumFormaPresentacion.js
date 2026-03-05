class EnumFormaPresentacion {
    static UNICO = 1;
    static CONSOLIDADO = 2;
    static SUCURSAL = 3;
    static DEPENDENCIA = 4;

    static descriptions = [
        { id: EnumFormaPresentacion.UNICO, code: 'UNICO', description: 'Único' },
        { id: EnumFormaPresentacion.CONSOLIDADO, code: 'CONSOLIDADO', description: 'Consolidado' },
        { id: EnumFormaPresentacion.SUCURSAL, code: 'SUCURSAL', description: 'Sucursal' },
        { id: EnumFormaPresentacion.DEPENDENCIA, code: 'DEPENDENCIA', description: 'Dependencia' },
    ];

    static getById(id) {
        return EnumFormaPresentacion.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumFormaPresentacion.descriptions;
    }

    static getByDescription(description) {
        return EnumFormaPresentacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumFormaPresentacion;
