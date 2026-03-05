class EnumDiasSemana {
    static LUNES = 1;
    static MARTES = 2;
    static MIERCOLES = 3;
    static JUEVES = 4;
    static VIERNES = 5;
    static SABADO = 6;
    static DOMINGO = 7;

    static descriptions = [
        { id: EnumDiasSemana.LUNES, code: 'LUNES', description: 'Lunes' },
        { id: EnumDiasSemana.MARTES, code: 'MARTES', description: 'Martes' },
        { id: EnumDiasSemana.MIERCOLES, code: 'MIERCOLES', description: 'Miercoles' },
        { id: EnumDiasSemana.JUEVES, code: 'JUEVES', description: 'Jueves' },
        { id: EnumDiasSemana.VIERNES, code: 'VIERNES', description: 'Viernes' },
        { id: EnumDiasSemana.SABADO, code: 'SABADO', description: 'Sabado' },
        { id: EnumDiasSemana.DOMINGO, code: 'DOMINGO', description: 'Domingo' },
    ];

    static getById(id) {
        return EnumDiasSemana.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumDiasSemana.descriptions;
    }

    static getByDescription(description) {
        return EnumDiasSemana.descriptions.find(item => item.description === description) || null;
    }
}


module.exports = EnumDiasSemana;