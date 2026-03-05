class EnumTiempo {
    static hh = 1;
    static mm = 2;
    static ss = 3;

    static descriptions = [
        { id: EnumTiempo.hh, code: 'hh', description: 'Hora' },
        { id: EnumTiempo.mm, code: 'mm', description: 'Minuto' },
        { id: EnumTiempo.ss, code: 'ss', description: 'Segundo' },
    ];

    static getById(id) {
        return EnumTiempo.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTiempo.descriptions;
    }

    static getByDescription(description) {
        return EnumTiempo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTiempo;

