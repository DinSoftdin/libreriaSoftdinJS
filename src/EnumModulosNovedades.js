class EnumModulosNovedades {
    static APORTE_VOLUNTARIO_SEGURIDAD_SOCIAL = 1;
    static BENEFICIO_PERSONAL = 2;
    static EMBARGOS = 3;
    static FONDOS_AHORRO_PAGO = 4;
    static FONDOS_AHORRO_REGISTROS = 5;
    static HORAS_EXTRAS = 6;
    static INGRESOS_DESCUENTOS_CONSECUTIVOS = 7;
    static NOVEDADES_CARGOS = 8;
    static NOVEDADES_RETE_FUENTE = 9;
    static NOVEDADES_SEGURIDAD_SOCIAL = 10;
    static OTROS_INGRESOS_DESCUENTOS = 11;
    static PAGOS_EXTERNOS = 12;
    static PAGO_LABOR = 13;
    static PAGO_PRODUCCION = 14;
    static PRESTAMOS = 15;

    static descriptions = [
        { id: EnumModulosNovedades.APORTE_VOLUNTARIO_SEGURIDAD_SOCIAL, code: 'APORTE_VOLUNTARIO_SEGURIDAD_SOCIAL', description: 'Aporte Voluntario Seguridad Social' },
        { id: EnumModulosNovedades.BENEFICIO_PERSONAL, code: 'BENEFICIO_PERSONAL', description: 'Beneficio Personal' },
        { id: EnumModulosNovedades.EMBARGOS, code: 'EMBARGOS', description: 'Embargos' },
        { id: EnumModulosNovedades.FONDOS_AHORRO_PAGO, code: 'FONDOS_AHORRO_PAGO', description: 'Fondos Ahorro Pago' },
        { id: EnumModulosNovedades.FONDOS_AHORRO_REGISTROS, code: 'FONDOS_AHORRO_REGISTROS', description: 'Fondos Ahorro Registros' },
        { id: EnumModulosNovedades.HORAS_EXTRAS, code: 'HORAS_EXTRAS', description: 'Horas Extras' },
        { id: EnumModulosNovedades.INGRESOS_DESCUENTOS_CONSECUTIVOS, code: 'INGRESOS_DESCUENTOS_CONSECUTIVOS', description: 'Ingresos Descuentos Consecutivos' },
        { id: EnumModulosNovedades.NOVEDADES_CARGOS, code: 'NOVEDADES_CARGOS', description: 'Novedades Cargos' },
        { id: EnumModulosNovedades.NOVEDADES_RETE_FUENTE, code: 'NOVEDADES_RETE_FUENTE', description: 'Novedades Rete Fuente' },
        { id: EnumModulosNovedades.NOVEDADES_SEGURIDAD_SOCIAL, code: 'NOVEDADES_SEGURIDAD_SOCIAL', description: 'Novedades Seguridad Social' },
        { id: EnumModulosNovedades.OTROS_INGRESOS_DESCUENTOS, code: 'OTROS_INGRESOS_DESCUENTOS', description: 'Otros Ingresos Descuentos' },
        { id: EnumModulosNovedades.PAGOS_EXTERNOS, code: 'PAGOS_EXTERNOS', description: 'Pagos Externos' },
        { id: EnumModulosNovedades.PAGO_LABOR, code: 'PAGO_LABOR', description: 'Pago Labor' },
        { id: EnumModulosNovedades.PAGO_PRODUCCION, code: 'PAGO_PRODUCCION', description: 'Pago Producción' },
        { id: EnumModulosNovedades.PRESTAMOS, code: 'PRESTAMOS', description: 'Préstamos' }
    ];

    static getById(id) {
        return EnumModulosNovedades.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumModulosNovedades.descriptions;
    }

    static getByDescription(description) {
        return EnumModulosNovedades.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumModulosNovedades;

