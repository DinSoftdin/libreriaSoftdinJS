class EnumClaseEmpresa {
    static EMPRESA = 1;
    static COOPERATIVA = 2;
    static BANCO = 3;
    static PILA = 4;

    static descriptions = [
        { id: EnumClaseEmpresa.EMPRESA, code: 'EMP', description: 'EMPRESA' },
        { id: EnumClaseEmpresa.COOPERATIVA, code: 'COP', description: 'COOPERATIVA' },
        { id: EnumClaseEmpresa.BANCO, code: 'BAN', description: 'BANCO' },
        { id: EnumClaseEmpresa.PILA, code: 'PIL', description: 'PILA' },
    ];

    static getById(id) {
        return EnumClaseEmpresa.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumClaseEmpresa.descriptions;
    }

    static getByDescription(description) {
        return EnumClaseEmpresa.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumClaseEmpresa;
