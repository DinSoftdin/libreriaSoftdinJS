class EnumModalidadEjecucionNomina {
    static INGRESO = 1;
    static DEDUCCION = 2;
    static PROV_SEG = 3;
    static PROV_PRF = 4;
    static PROV_ARL = 5;
    static PROV_PRS = 6;
    static VACACIONES = 7;

    static descriptions = [
        { id: EnumModalidadEjecucionNomina.INGRESO, code: 'INGRESO', description: 'Ingreso' },
        { id: EnumModalidadEjecucionNomina.DEDUCCION, code: 'DEDUCCION', description: 'Deducción' },
        { id: EnumModalidadEjecucionNomina.PROV_SEG, code: 'PROV_SEG', description: 'Provisión Seguridad Social' },
        { id: EnumModalidadEjecucionNomina.PROV_PRF, code: 'PROV_PRF', description: 'Provisión Parafiscales' },
        { id: EnumModalidadEjecucionNomina.PROV_ARL, code: 'PROV_ARL', description: 'Provisión Riesgos Laborales' },
        { id: EnumModalidadEjecucionNomina.PROV_PRS, code: 'PROV_PRS', description: 'Provisión Prestaciones Sociales' },
        { id: EnumModalidadEjecucionNomina.VACACIONES, code: 'VACACIONES', description: 'Vacaciones' },
    ];

    static getById(id) {
        return EnumModalidadEjecucionNomina.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumModalidadEjecucionNomina.descriptions;
    }

    static getByDescription(description) {
        return EnumModalidadEjecucionNomina.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumModalidadEjecucionNomina;
