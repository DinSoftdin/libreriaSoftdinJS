class EnumTipoActividad {
    static COMERCIAL = 1;
    static SERVICIO = 2;
    static INDUSTRIAL = 3;

    static descriptions = [
        { id: EnumTipoActividad.COMERCIAL, code: 'COM', description: 'Comercial' },
        { id: EnumTipoActividad.SERVICIO, code: 'SER', description: 'Servicio' },
        { id: EnumTipoActividad.INDUSTRIAL, code: 'IND', description: 'Industrial' },
    ];

    static getById(id) {
        return EnumTipoActividad.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoActividad.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoActividad.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoActividad;

