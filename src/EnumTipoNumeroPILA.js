class EnumTipoNumeroPILA {
    static N = 1;
    static A = 2;

    static descriptions = [
        { id: EnumTipoNumeroPILA.N, code: 'N', description: 'N' },
        { id: EnumTipoNumeroPILA.A, code: 'A', description: 'A' },
    ];

    static getById(id) {
        return EnumTipoNumeroPILA.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoNumeroPILA.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoNumeroPILA.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoNumeroPILA;
