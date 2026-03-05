class EnumSemana {
    static LV = 1;
    static LS = 2;
    static D = 3;

    static descriptions = [
        { id: EnumSemana.LV, code: 'LV', description: 'Lunes a Viernes' },
        { id: EnumSemana.LS, code: 'LS', description: 'Lunes a Sábado' },
        { id: EnumSemana.D, code: 'D', description: 'Domingo' },
    ];

    static getById(id) {
        return EnumSemana.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumSemana.descriptions;
    }

    static getByDescription(description) {
        return EnumSemana.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumSemana;

