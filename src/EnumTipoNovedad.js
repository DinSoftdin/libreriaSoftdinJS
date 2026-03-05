class EnumTipoNovedad {
    static INGRESO = 1;
    static DEDUCCION = 2;
    static HORAS_EXTRA = 3;
    static PROV_PREST = 4;
    static PROV_SEGSOC = 5;
    static PLANILLA_UNICA = 6;
    static LIQUIDACION = 7;
    static AGRUPAR = 10;
    static FORMULA = 11;

    static descriptions = [
        { id: EnumTipoNovedad.INGRESO, code: 'INGRESO', description: 'Ingreso' },
        { id: EnumTipoNovedad.DEDUCCION, code: 'DEDUCCION', description: 'Deducción' },
        { id: EnumTipoNovedad.HORAS_EXTRA, code: 'HORAS_EXTRA', description: 'Horas Extra' },
        { id: EnumTipoNovedad.PROV_PREST, code: 'PROV_PREST', description: 'Provisión Prestaciones' },
        { id: EnumTipoNovedad.PROV_SEGSOC, code: 'PROV_SEGSOC', description: 'Provisión Seguridad Social' },
        { id: EnumTipoNovedad.PLANILLA_UNICA, code: 'PLANILLA_UNICA', description: 'Planilla Única' },
        { id: EnumTipoNovedad.LIQUIDACION, code: 'LIQUIDACION', description: 'Liquidación' },
        { id: EnumTipoNovedad.AGRUPAR, code: 'AGRUPAR', description: 'Agrupar' },
        { id: EnumTipoNovedad.FORMULA, code: 'FORMULA', description: 'Fórmula' }
    ];

    static getById(id) {
        return EnumTipoNovedad.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoNovedad.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoNovedad.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoNovedad;

