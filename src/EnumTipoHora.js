const EnumVariablesSistema = require('./EnumVariablesSistema');

class EnumTipoHora {
    static ORD = EnumVariablesSistema.Salario;
    static RN = EnumVariablesSistema.RecargoNocturno;
    static RNE = EnumVariablesSistema.RecargoNocturnoEspecial;
    static HED = EnumVariablesSistema.HoraExtraDiurna;
    static HEN = EnumVariablesSistema.HoraExtraNocturna;
    static DF = EnumVariablesSistema.HoraDominical;
    static RNDF = EnumVariablesSistema.RecargoNocturnoDominical;
    static HEDDF = EnumVariablesSistema.HoraExtraDominicalDiurna;
    static HENDF = EnumVariablesSistema.HoraExtraDominicalNocturna;

    static descriptions = [
        { id: EnumTipoHora.ORD, code: 'ORD', description: EnumVariablesSistema.getById(EnumTipoHora.ORD).description },
        { id: EnumTipoHora.RN, code: 'RN', description: EnumVariablesSistema.getById(EnumTipoHora.RN).description },
        { id: EnumTipoHora.RNE, code: 'RNE', description: EnumVariablesSistema.getById(EnumTipoHora.RNE).description },
        { id: EnumTipoHora.HED, code: 'HED', description: EnumVariablesSistema.getById(EnumTipoHora.HED).description },
        { id: EnumTipoHora.HEN, code: 'HEN', description: EnumVariablesSistema.getById(EnumTipoHora.HEN).description },
        { id: EnumTipoHora.DF, code: 'DF', description: EnumVariablesSistema.getById(EnumTipoHora.DF).description },
        { id: EnumTipoHora.RNDF, code: 'RNDF', description: EnumVariablesSistema.getById(EnumTipoHora.RNDF).description },
        { id: EnumTipoHora.HEDDF, code: 'HEDDF', description: EnumVariablesSistema.getById(EnumTipoHora.HEDDF).description },
        { id: EnumTipoHora.HENDF, code: 'HENDF', description: EnumVariablesSistema.getById(EnumTipoHora.HENDF).description },
    ];

    static getById(id) {
        return EnumTipoHora.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoHora.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoHora.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoHora;
