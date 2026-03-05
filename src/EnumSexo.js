class EnumSexo {
    static M = 1;
    static F = 2;
    static ND = 3;
    static NDR = 4;

    static descriptions = [
        { id: EnumSexo.M, code: 'M', description: 'Masculino' },
        { id: EnumSexo.F, code: 'F', description: 'Femenino' },
        { id: EnumSexo.ND, code: 'ND', description: 'No definido' },
        { id: EnumSexo.NDR, code: 'NDR', description: 'No deseo responder' }    
    ];

    static getById(id) {
        return EnumSexo.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumSexo.descriptions;
    }

    static getByDescription(description) {
        return EnumSexo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumSexo;

