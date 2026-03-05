class EnumConceptosContrato {
    static AREATRABAJO = 1;
    static CARGO = 2;
    static DIVISION = 3;
    static MODALIDADSERVICIO = 4;
    static SEDE = 5;
    static SUCURSAL = 6;
    static SUCURSALPILA = 7;
    static TIPOCONTRATO = 8;

    static descriptions = [
        { id: EnumConceptosContrato.AREATRABAJO, code: 'AREATRABAJO', description: "Area de Trabajo" },
        { id: EnumConceptosContrato.CARGO, codigo: 'CARGO', description: "Cargo" },
        { id: EnumConceptosContrato.DIVISION, codigo: 'DIVISION', description: "División" },
        { id: EnumConceptosContrato.MODALIDADSERVICIO, codigo: 'MODALIDADSERVICIO', description: "Modalidad de Servicio" },
        { id: EnumConceptosContrato.SEDE, codigo: 'SEDE', description: "Sede" },
        { id: EnumConceptosContrato.SUCURSAL, codigo: 'SUCURSAL', description: "Sucursal" },
        { id: EnumConceptosContrato.SUCURSALPILA, codigo: 'SUCURSALPILA', description: "Sucursal PILA" },
        { id: EnumConceptosContrato.TIPOCONTRATO, codigo: 'TIPOCONTRATO', description: "Tipo de Contrato" },
    ];

    static getById(id) {
        return EnumConceptosContrato.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumConceptosContrato.descriptions;
    }

    static getByDescription(description) {
        return EnumConceptosContrato.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumConceptosContrato;