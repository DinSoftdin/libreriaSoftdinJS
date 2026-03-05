class EnumContinente {
    static ASIA = 1;
    static AFRICA = 2;
    static EUROPA = 3;
    static AMERICA_NORTE = 4;
    static AMERICA_SUR = 5;
    static OCEANIA = 6;

    static descriptions = [
        { id: EnumContinente.ASIA, code: 'ASIA', description: 'Asia' },
        { id: EnumContinente.AFRICA, code: 'AFRICA', description: 'Africa' },
        { id: EnumContinente.EUROPA, code: 'EUROPA', description: 'Europa' },
        { id: EnumContinente.AMERICA_NORTE, code: 'AMERICA_NORTE', description: 'América del Norte' },
        { id: EnumContinente.AMERICA_SUR, code: 'AMERICA_SUR', description: 'América del Sur' },
        { id: EnumContinente.OCEANIA, code: 'OCEANIA', description: 'Oceanía' },    ];

    static getById(id) {
        return EnumContinente.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumContinente.descriptions;
    }

    static getByDescription(description) {
        return EnumContinente.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumContinente;

