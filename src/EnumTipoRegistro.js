class EnumTipoRegistro {
    static IMPORTACION = 1;
    static REGISTRO = 2;
    static WEB = 3;

    static descriptions = [
        { id: EnumTipoRegistro.IMPORTACION, code: 'IMPORTACION', description: 'Importación' },
        { id: EnumTipoRegistro.REGISTRO, code: 'REGISTRO', description: 'Registro' },
        { id: EnumTipoRegistro.WEB, code: 'WEB', description: 'Web' }
    ];

    static getById(id) {
        return EnumTipoRegistro.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoRegistro.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoRegistro.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegistro;

