class EnumTipoPlanilla {
    static E = 1;
    static Y = 2;
    static A = 3;
    static I = 4;
    static S = 5;
    static M = 6;
    static N = 7;
    static H = 8;
    static T = 9;
    static F = 10;
    static J = 11;
    static X = 12;
    static U = 13;
    static K = 14;

    static descriptions = [
        { id: EnumTipoPlanilla.E, code: 'E', description: 'Empleados Empresas' },
        { id: EnumTipoPlanilla.Y, code: 'Y', description: 'Independientes Empresa' },
        { id: EnumTipoPlanilla.A, code: 'A', description: 'Empleados Adicionales' },
        { id: EnumTipoPlanilla.I, code: 'I', description: 'Independientes' },
        { id: EnumTipoPlanilla.S, code: 'S', description: 'Empleados de Servicio Domestico' },
        { id: EnumTipoPlanilla.M, code: 'M', description: 'Mora' },
        { id: EnumTipoPlanilla.N, code: 'N', description: 'Correcciones' },
        { id: EnumTipoPlanilla.H, code: 'H', description: 'Madres Sustitutas' },
        { id: EnumTipoPlanilla.T, code: 'T', description: 'Empleados Entidad Beneficiaria SGP' },
        { id: EnumTipoPlanilla.F, code: 'F', description: 'Pago Aporte Patronal Faltante SGP' },
        { id: EnumTipoPlanilla.J, code: 'J', description: 'Pago Seguridad Social Cump. Sentencia Judicial' },
        { id: EnumTipoPlanilla.X, code: 'X', description: 'Pago Empresa Liquidada' },
        { id: EnumTipoPlanilla.U, code: 'U', description: 'Uso UGPP pago por tercero' },
        { id: EnumTipoPlanilla.K, code: 'K', description: 'Estudiantes' }
    ];

    static getById(id) {
        return EnumTipoPlanilla.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoPlanilla.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoPlanilla.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoPlanilla;
