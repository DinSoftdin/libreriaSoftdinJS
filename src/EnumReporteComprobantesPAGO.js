class EnumReporteComprobantesPAGO {
    static GENERAL = 1;
    static DETALLADO_INGRESOS = 2;
    static DETALLADO_MODALIDAD = 3;
    static DETALLADO_PRESTAMOS = 4;
    static RESUMEN = 5;

    static descriptions = [
        { id: EnumReporteComprobantesPAGO.GENERAL, code: 'GENERAL', description: 'General' },
        { id: EnumReporteComprobantesPAGO.DETALLADO_INGRESOS, code: 'DETALLADO_INGRESOS', description: 'Detallado de Ingresos' },
        { id: EnumReporteComprobantesPAGO.DETALLADO_MODALIDAD, code: 'DETALLADO_MODALIDAD', description: 'Detallado Modalidad' },
        { id: EnumReporteComprobantesPAGO.DETALLADO_PRESTAMOS, code: 'DETALLADO_PRESTAMOS', description: 'Detallado Prestamos' },
        { id: EnumReporteComprobantesPAGO.RESUMEN, code: 'RESUMEN', description: 'Resumen' },
    ];

    static getById(id) {
        return EnumReporteComprobantesPAGO.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumReporteComprobantesPAGO.descriptions;
    }

    static getByDescription(description) {
        return EnumReporteComprobantesPAGO.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumReporteComprobantesPAGO;

