class EnumNE_Licencias {
    static LMP = 1;
    static LR = 2;
    static LNR = 3;

    static descriptions = [
        { id: EnumNE_Licencias.LMP, code: 'LMP', description: 'LicenciasMaternidadOPaternidad' },
        { id: EnumNE_Licencias.LR, code: 'LR', description: 'LicenciasRemuneradas' },
        { id: EnumNE_Licencias.LNR, code: 'LNR', description: 'LicenciasNoRemuneradas' },
    ];

    static getCollection() {
        return EnumNE_Licencias.descriptions;
    }

    static getById(id) {
        return EnumNE_Licencias.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_Licencias.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_Licencias.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_Licencias;
