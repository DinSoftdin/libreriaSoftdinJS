class EnumTipoServicioSeguridadSocial {
    static EPS = 1;
    static AFP = 2;
    static ARL = 3;
    static CCF = 4;
    static SENA = 5;
    static ICBF = 6;
    static ESAP = 7;
    static MEN = 8;
    static FONDO_CESANTIAS = 9;

    static descriptions = [
        { id: EnumTipoServicioSeguridadSocial.EPS, code: 'EPS', description: 'EPS' },
        { id: EnumTipoServicioSeguridadSocial.AFP, code: 'AFP', description: 'AFP' },
        { id: EnumTipoServicioSeguridadSocial.ARL, code: 'ARL', description: 'ARL' },
        { id: EnumTipoServicioSeguridadSocial.CCF, code: 'CCF', description: 'CCF' },
        { id: EnumTipoServicioSeguridadSocial.SENA, code: 'SENA', description: 'SENA' },
        { id: EnumTipoServicioSeguridadSocial.ICBF, code: 'ICBF', description: 'ICBF' },
        { id: EnumTipoServicioSeguridadSocial.ESAP, code: 'ESAP', description: 'ESAP' },
        { id: EnumTipoServicioSeguridadSocial.MEN, code: 'MEN', description: 'Ministerio de Educación' },
        { id: EnumTipoServicioSeguridadSocial.FONDO_CESANTIAS, code: 'FONDO_CESANTIAS', description: 'Fondo de Cesantías' }
    ];

    static getById(id) {
        return EnumTipoServicioSeguridadSocial.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoServicioSeguridadSocial.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoServicioSeguridadSocial.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoServicioSeguridadSocial;
