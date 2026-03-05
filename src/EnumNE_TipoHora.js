class EnumNE_TipoHora {
    static HED = EnumVariablesSistema.HoraExtraDiurna;
    static HEN = EnumVariablesSistema.HoraExtraNocturna;
    static HRN = EnumVariablesSistema.RecargoNocturno;
    static HRDDF = EnumVariablesSistema.HoraDominical;
    static HEDDF = EnumVariablesSistema.HoraExtraDominicalDiurna;
    static HENDF = EnumVariablesSistema.HoraExtraDominicalNocturna;
    static HRNDF = EnumVariablesSistema.RecargoNocturnoDominical;

    static descriptions = [
        { id: EnumNE_TipoHora.HED, code: '1', description: EnumVariablesSistema.getDescription(EnumVariablesSistema.HoraExtraDiurna) },
        { id: EnumNE_TipoHora.HEN, code: '2', description: EnumVariablesSistema.getDescription(EnumVariablesSistema.HoraExtraNocturna) },
        { id: EnumNE_TipoHora.HRN, code: '3', description: EnumVariablesSistema.getDescription(EnumVariablesSistema.RecargoNocturno) },
        { id: EnumNE_TipoHora.HRDDF, code: '4', description: EnumVariablesSistema.getDescription(EnumVariablesSistema.HoraDominical) },
        { id: EnumNE_TipoHora.HEDDF, code: '5', description: EnumVariablesSistema.getDescription(EnumVariablesSistema.HoraExtraDominicalDiurna) },
        { id: EnumNE_TipoHora.HENDF, code: '6', description: EnumVariablesSistema.getDescription(EnumVariablesSistema.HoraExtraDominicalNocturna) },
        { id: EnumNE_TipoHora.HRNDF, code: '7', description: EnumVariablesSistema.getDescription(EnumVariablesSistema.RecargoNocturnoDominical) },
    ];

    static getCollection() {
        return EnumNE_TipoHora.descriptions;
    }

    static getById(id) {
        return EnumNE_TipoHora.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_TipoHora.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_TipoHora.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoHora;