class EnumNE_Operadores {
    static Facturaxion = 1;
    static Dian = 2;

    static descriptions = [
        { id: EnumNE_Operadores.Facturaxion, code: 'Facturaxion', description: 'Facturación' },
        { id: EnumNE_Operadores.Dian, code: 'Dian', description: 'DIAN' },
    ];

    static getCollection() {
        return EnumNE_Operadores.descriptions;
    }

    static getById(id) {
        return EnumNE_Operadores.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_Operadores.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_Operadores.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_Operadores;