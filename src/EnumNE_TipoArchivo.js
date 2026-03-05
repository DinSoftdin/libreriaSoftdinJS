class EnumNE_TipoArchivo {
    static N = 1;
    static E = 2;
    static A = 3;

    static descriptions = [
        { id: EnumNE_TipoArchivo.N, code: 'N', description: 'Tipo N' },
        { id: EnumNE_TipoArchivo.E, code: 'E', description: 'Tipo E' },
        { id: EnumNE_TipoArchivo.A, code: 'A', description: 'Tipo A' },
    ];

    static getCollection() {
        return EnumNE_TipoArchivo.descriptions;
    }

    static getById(id) {
        return EnumNE_TipoArchivo.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_TipoArchivo.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_TipoArchivo.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoArchivo;
