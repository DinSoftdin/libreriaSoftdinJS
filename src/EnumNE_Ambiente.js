class EnumNE_Ambiente {
    static Produccion = 1;
    static Pruebas = 2;

    static descriptions = [
        { id: EnumNE_Ambiente.Produccion, code: 'Produccion', description: 'Producción' },
        { id: EnumNE_Ambiente.Pruebas, code: 'Pruebas', description: 'Pruebas' },
    ];

    static getCollection() {
        return EnumNE_Ambiente.descriptions;
    }

    static getById(id) {
        return EnumNE_Ambiente.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_Ambiente.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_Ambiente.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_Ambiente;