class EnumTipoIdentificacion {
    static CC = 1;
    static TI = 2;
    static RC = 3;
    static CE = 4;
    static PA = 5;
    static NI = 6;
    static CD = 7;
    static SC = 8;
    static NIO = 9;

    static descriptions = [
        { id: EnumTipoIdentificacion.CC, code: 'CC', description: "Cedula de Ciudadania" },
        { id: EnumTipoIdentificacion.TI, code: 'TI', description: "Tarjeta de Identidad" },
        { id: EnumTipoIdentificacion.RC, code: 'RC', description: "Registro Civil" },
        { id: EnumTipoIdentificacion.CE, code: 'CE', description: "Cedula de Extranjería" },
        { id: EnumTipoIdentificacion.PA, code: 'PA', description: "Pasaporte" },
        { id: EnumTipoIdentificacion.NI, code: 'NI', description: "Numero de Identificación Tributaria NIT" },
        { id: EnumTipoIdentificacion.CD, code: 'CD', description: "Carne Diplomático" },
        { id: EnumTipoIdentificacion.SC, code: 'SC', description: "Salvoconducto de permanencia" },
        { id: EnumTipoIdentificacion.NIO, code: 'NIO', description: "Numero de Identificación Tributaria NIT Entidad Oficial" }
    ];

    static getById(id) {
        return EnumTipoIdentificacion.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoIdentificacion.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoIdentificacion.descriptions.find(item => item.description === description) || null;
    }
}


module.exports = EnumTipoIdentificacion;
