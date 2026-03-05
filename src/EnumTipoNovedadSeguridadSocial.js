class EnumTipoNovedadSeguridadSocial {
    static I = 1;
    static R = 2;
    static N = 3;
    static NOR = 4;
    static SLN = 5;
    static IGE = 6;
    static LMA = 7;
    static VAC = 8;
    static IRL = 9;
    static LRM = 10;

    static descriptions = [
        { id: EnumTipoNovedadSeguridadSocial.I, code: 'I', description: 'I' },
        { id: EnumTipoNovedadSeguridadSocial.R, code: 'R', description: 'R' },
        { id: EnumTipoNovedadSeguridadSocial.N, code: 'N', description: 'N' },
        { id: EnumTipoNovedadSeguridadSocial.NOR, code: 'NOR', description: 'NOR' },
        { id: EnumTipoNovedadSeguridadSocial.SLN, code: 'SLN', description: 'SLN' },
        { id: EnumTipoNovedadSeguridadSocial.IGE, code: 'IGE', description: 'IGE' },
        { id: EnumTipoNovedadSeguridadSocial.LMA, code: 'LMA', description: 'LMA' },
        { id: EnumTipoNovedadSeguridadSocial.VAC, code: 'VAC', description: 'VAC' },
        { id: EnumTipoNovedadSeguridadSocial.IRL, code: 'IRL', description: 'IRL' },
        { id: EnumTipoNovedadSeguridadSocial.LRM, code: 'LRM', description: 'LRM' },
    ];

    static getById(id) {
        return EnumTipoNovedadSeguridadSocial.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoNovedadSeguridadSocial.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoNovedadSeguridadSocial.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoNovedadSeguridadSocial;

