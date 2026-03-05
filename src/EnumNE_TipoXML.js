class EnumNE_TipoXML {
    static NominaIndividual = 102;
    static NominaIndividualDeAjuste = 103;

    static descriptions = [
        { id: EnumNE_TipoXML.NominaIndividual, code: 'NominaIndividual', description: 'Nomina Individual' },
        { id: EnumNE_TipoXML.NominaIndividualDeAjuste, code: 'NominaIndividualDeAjuste', description: 'Nomina Individual de Ajuste' },
    ];

    static getCollection() {
        return EnumNE_TipoXML.descriptions;
    }

    static getById(id) {
        return EnumNE_TipoXML.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_TipoXML.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_TipoXML.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoXML;