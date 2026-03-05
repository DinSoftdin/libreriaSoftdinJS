class EnumTipoContrato {
    static FIJO = 1;
    static INDEFINIDO = 2;
    static APRENDIZAJE = 3;
    static OBRA_LABOR = 4;
    static PRACTICAS_PASANTIAS = 5;
    static ASOCIACION = 6;

    static descriptions = [
        { id: EnumTipoContrato.FIJO, code: 'FIJO', description: 'Fijo' },
        { id: EnumTipoContrato.INDEFINIDO, code: 'INDEFINIDO', description: 'Indefinido' },
        { id: EnumTipoContrato.APRENDIZAJE, code: 'APRENDIZAJE', description: 'Aprendizaje' },
        { id: EnumTipoContrato.OBRA_LABOR, code: 'OBRA_LABOR', description: 'Obra o Labor' },
        { id: EnumTipoContrato.PRACTICAS_PASANTIAS, code: 'PRACTICAS_PASANTIAS', description: 'Prácticas o Pasantías' },
        { id: EnumTipoContrato.ASOCIACION, code: 'ASOCIACION', description: 'Asociación' }
    ];

    static getById(id) {
        return EnumTipoContrato.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoContrato.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoContrato.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoContrato;

