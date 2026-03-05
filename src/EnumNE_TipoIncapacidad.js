class EnumNE_TipoIncapacidad {
    static Comun = 1;
    static Profesional = 2;
    static Laboral = 3;

    static descriptions = [
        { id: EnumNE_TipoIncapacidad.Comun, code: 'Comun', description: 'Común' },
        { id: EnumNE_TipoIncapacidad.Profesional, code: 'Profesional', description: 'Profesional' },
        { id: EnumNE_TipoIncapacidad.Laboral, code: 'Laboral', description: 'Laboral' },
    ];

    static getCollection() {
        return EnumNE_TipoIncapacidad.descriptions;
    }

    static getById(id) {
        return EnumNE_TipoIncapacidad.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_TipoIncapacidad.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_TipoIncapacidad.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoIncapacidad;