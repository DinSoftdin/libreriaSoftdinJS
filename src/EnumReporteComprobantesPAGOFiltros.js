class EnumReporteComprobantesPAGOFiltros {
    static CLIENTE = 1;
    static MODALIDAD_CONTRATACION = 2;
    static CONTRATACION = 3;
    static CODIGO = 4;
    static EMAIL = 5;

    static descriptions = [
        { id: EnumReporteComprobantesPAGOFiltros.CLIENTE, code: 'CLIENTE', description: 'Cliente' },
        { id: EnumReporteComprobantesPAGOFiltros.MODALIDAD_CONTRATACION, code: 'MODALIDAD_CONTRATACION', description: 'Modalidad de Contratación' },
        { id: EnumReporteComprobantesPAGOFiltros.CONTRATACION, code: 'CONTRATACION', description: 'Contratación' },
        { id: EnumReporteComprobantesPAGOFiltros.CODIGO, code: 'CODIGO', description: 'Código' },
        { id: EnumReporteComprobantesPAGOFiltros.EMAIL, code: 'EMAIL', description: 'Email' },
    ];

    static getById(id) {
        return EnumReporteComprobantesPAGOFiltros.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumReporteComprobantesPAGOFiltros.descriptions;
    }

    static getByDescription(description) {
        return EnumReporteComprobantesPAGOFiltros.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumReporteComprobantesPAGOFiltros;
