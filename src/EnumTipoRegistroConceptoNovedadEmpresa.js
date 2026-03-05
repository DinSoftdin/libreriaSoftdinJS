class EnumTipoRegistroConceptoNovedadEmpresa {
    static ASIGCON = 1;
    static EMPRESA = 2;

    static descriptions = [
        { id: EnumTipoRegistroConceptoNovedadEmpresa.ASIGCON, code: 'ASIGCON', description: 'Asignación Contable' },
        { id: EnumTipoRegistroConceptoNovedadEmpresa.EMPRESA, code: 'EMPRESA', description: 'Asignación por Empresa' }
    ];

    static getById(id) {
        return EnumTipoRegistroConceptoNovedadEmpresa.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoRegistroConceptoNovedadEmpresa.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoRegistroConceptoNovedadEmpresa.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegistroConceptoNovedadEmpresa;

