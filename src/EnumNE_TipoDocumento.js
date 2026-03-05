class EnumNE_TipoDocumento {
    static Registro_civil = 11;
    static Tarjeta_identidad = 12;
    static Cedula_ciudadania = 13;
    static Tarjeta_extranjeria = 21;
    static Cedula_extranjeria = 22;
    static NIT = 31;
    static Pasaporte = 41;
    static Documento_identificacion_extranjero = 42;
    static PEP = 47;
    static NIT_otro_pais = 50;
    static NUIP = 91;

    static descriptions = [
        { id: EnumNE_TipoDocumento.Registro_civil, code: 'Registro_civil', description: 'Registro civil' },
        { id: EnumNE_TipoDocumento.Tarjeta_identidad, code: 'Tarjeta_identidad', description: 'Tarjeta de identidad' },
        { id: EnumNE_TipoDocumento.Cedula_ciudadania, code: 'Cedula_ciudadania', description: 'Cédula de ciudadanía' },
        { id: EnumNE_TipoDocumento.Tarjeta_extranjeria, code: 'Tarjeta_extranjeria', description: 'Tarjeta de extranjería' },
        { id: EnumNE_TipoDocumento.Cedula_extranjeria, code: 'Cedula_extranjeria', description: 'Cédula de extranjería' },
        { id: EnumNE_TipoDocumento.NIT, code: 'NIT', description: 'NIT' },
        { id: EnumNE_TipoDocumento.Pasaporte, code: 'Pasaporte', description: 'Pasaporte' },
        { id: EnumNE_TipoDocumento.Documento_identificacion_extranjero, code: 'Documento_identificacion_extranjero', description: 'Documento de identificación extranjero' },
        { id: EnumNE_TipoDocumento.PEP, code: 'PEP', description: 'PEP' },
        { id: EnumNE_TipoDocumento.NIT_otro_pais, code: 'NIT_otro_pais', description: 'NIT de otro país' },
        { id: EnumNE_TipoDocumento.NUIP, code: 'NUIP', description: 'NUIP *' },
    ];

    static getCollection() {
        return EnumNE_TipoDocumento.descriptions;
    }

    static getById(id) {
        return EnumNE_TipoDocumento.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_TipoDocumento.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_TipoDocumento.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoDocumento;