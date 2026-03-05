const EnumVariablesSistema = require('./EnumVariablesSistema');

class EnumIncapacidades {
    static IGE_IncapacidadGeneral = EnumVariablesSistema.IGE_IncapacidadGeneral;
    static IRP_IncapacidadAccidenteTrabajo = EnumVariablesSistema.IRP_IncapacidadAccidenteTrabajo;
    static LMA_LicenciaMaternidad = EnumVariablesSistema.LMA_LicenciaMaternidad;

    static descriptions = [
        { id: EnumIncapacidades.IGE_IncapacidadGeneral, code: 'IGE_IncapacidadGeneral', description: EnumVariablesSistema.getById(EnumVariablesSistema.IGE_IncapacidadGeneral).description },
        { id: EnumIncapacidades.IRP_IncapacidadAccidenteTrabajo, code: 'IRP_IncapacidadAccidenteTrabajo', description: EnumVariablesSistema.getById(EnumVariablesSistema.IRP_IncapacidadAccidenteTrabajo).description },
        { id: EnumIncapacidades.LMA_LicenciaMaternidad, code: 'LMA_LicenciaMaternidad', description: EnumVariablesSistema.getById(EnumVariablesSistema.LMA_LicenciaMaternidad).description },
    ];

    static getById(id) {
        return EnumIncapacidades.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumIncapacidades.descriptions;
    }

    static getByDescription(description) {
        return EnumIncapacidades.descriptions.find(item => item.description === description) || null;
    }

    static getDescription(value) {
        const keys = Object.keys(EnumIncapacidades);
        for (const key of keys) {
            if (EnumIncapacidades[key] === value) {
                return EnumIncapacidades.getDescriptionByName(key);
            }
        }
        return null;
    }

    static getDescriptionByName(name) {
        const description = EnumIncapacidades[name].description;
        return description ? description : null;
    }
}

module.exports = EnumIncapacidades;
