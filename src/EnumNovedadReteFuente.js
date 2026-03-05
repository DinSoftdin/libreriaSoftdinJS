class EnumNovedadReteFuente {
    static Intereses_Vivienda = 1;
    static SaludVoluntaria = 2;
    static Salud_Obligatoria = 3;
    static Ahorro_AFC = 4;
    static Dependiente = 5;
    static DeclaranteRF = 6;
    static Procedimiento_Dos = 7;
    static Alimentacion = 8;

    static descriptions = [
        { id: EnumNovedadReteFuente.Intereses_Vivienda, code: 'Intereses_Vivienda', description: 'Intereses de Vivienda' },
        { id: EnumNovedadReteFuente.SaludVoluntaria, code: 'SaludVoluntaria', description: 'Salud Voluntaria' },
        { id: EnumNovedadReteFuente.Salud_Obligatoria, code: 'Salud_Obligatoria', description: 'Salud Obligatoria' },
        { id: EnumNovedadReteFuente.Ahorro_AFC, code: 'Ahorro_AFC', description: 'Ahorro AFC' },
        { id: EnumNovedadReteFuente.Dependiente, code: 'Dependiente', description: 'Dependiente' },
        { id: EnumNovedadReteFuente.DeclaranteRF, code: 'DeclaranteRF', description: 'Declarante RF' },
        { id: EnumNovedadReteFuente.Procedimiento_Dos, code: 'Procedimiento_Dos', description: 'Procedimiento Dos' },
        { id: EnumNovedadReteFuente.Alimentacion, code: 'Alimentacion', description: 'Alimentación' },
    ];

    static getById(id) {
        return EnumNovedadReteFuente.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNovedadReteFuente.descriptions;
    }

    static getByDescription(description) {
        return EnumNovedadReteFuente.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumNovedadReteFuente;
