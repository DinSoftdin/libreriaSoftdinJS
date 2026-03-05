class EnumTipoRegistroHistorial {
    static CONTRATACION = 1;
    static PRORROGA = 2;
    static TERMINO = 3;
    static NOVEDADPILA = 4;

    static descriptions = [
        { id: EnumTipoRegistroHistorial.CONTRATACION, code: 'CONTRATACION', description: 'Contratación' },
        { id: EnumTipoRegistroHistorial.PRORROGA, code: 'PRORROGA', description: 'Prórroga' },
        { id: EnumTipoRegistroHistorial.TERMINO, code: 'TERMINO', description: 'Termino' },
        { id: EnumTipoRegistroHistorial.NOVEDADPILA, code: 'NOVEDADPILA', description: 'Novedades de PILA' }
    ];

    static getById(id) {
        return EnumTipoRegistroHistorial.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoRegistroHistorial.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoRegistroHistorial.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoRegistroHistorial;

