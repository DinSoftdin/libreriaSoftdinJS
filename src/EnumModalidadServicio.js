class EnumModalidadServicio {
    static NORMAL = 1;
    static PPD = 2;
    static LABOR = 3;

    static descriptions = [
        { id: EnumModalidadServicio.NORMAL, code: 'NORMAL', description: 'Normal' },
        { id: EnumModalidadServicio.PPD, code: 'PPD', description: 'PPD' },
        { id: EnumModalidadServicio.LABOR, code: 'LABOR', description: 'Labor' },
    ];

    static getById(id) {
        return EnumModalidadServicio.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumModalidadServicio.descriptions;
    }

    static getByDescription(description) {
        return EnumModalidadServicio.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumModalidadServicio;
