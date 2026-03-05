class EnumTipoTurno {
    static PRIMER_TURNO = 1;
    static SEGUNDO_TURNO = 2;
    static TERCER_TURNO = 3;

    static descriptions = [
        { id: EnumTipoTurno.PRIMER_TURNO, code: 'PRIMER_TURNO', description: 'Turno 1' },
        { id: EnumTipoTurno.SEGUNDO_TURNO, code: 'SEGUNDO_TURNO', description: 'Turno 2' },
        { id: EnumTipoTurno.TERCER_TURNO, code: 'TERCER_TURNO', description: 'Turno 3' }
    ];

    static getById(id) {
        return EnumTipoTurno.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoTurno.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoTurno.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoTurno;

