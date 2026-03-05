class EnumMensajes {
    static Ingresos = 1;
    static Terminos = 2;
    static Vacaciones = 3;
    static PeriodoPrueba = 4;
    static FinalizacionContrato = 5;
    static VencimientoEstudios = 6;

    static descriptions = [
        { id: EnumMensajes.Ingresos, code: 'Ingresos', description: 'Ingresos' },
        { id: EnumMensajes.Terminos, code: 'Terminos', description: 'Terminos' },
        { id: EnumMensajes.Vacaciones, code: 'Vacaciones', description: 'Vacaciones' },
        { id: EnumMensajes.PeriodoPrueba, code: 'PeriodoPrueba', description: 'Periodo de Prueba' },
        { id: EnumMensajes.FinalizacionContrato, code: 'FinalizacionContrato', description: 'Finalizacion de Contrato' },
        { id: EnumMensajes.VencimientoEstudios, code: 'VencimientoEstudios', description: 'Vencimiento de Estudios' },
    ];

    static getById(id) {
        return EnumMensajes.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumMensajes.descriptions;
    }

    static getByDescription(description) {
        return EnumMensajes.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumMensajes;
