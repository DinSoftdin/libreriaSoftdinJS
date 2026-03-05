class EnumTipoLibretaMilitar {
    static PRIMERA = 1;
    static SEGUNDA = 2;
    static NO_APLICA = 3;
    static NO_DEFINIDO = 0;

    static descriptions = [
        { id: EnumTipoLibretaMilitar.PRIMERA, code: 'PRIMERA', description: "Primera" },
        { id: EnumTipoLibretaMilitar.SEGUNDA, code: 'SEGUNDA', description: "Segunda" },
        { id: EnumTipoLibretaMilitar.NO_APLICA, code: 'NO_APLICA', description: "No Aplica" },
        { id: EnumTipoLibretaMilitar.NO_DEFINIDO, code: 'NO_DEFINIDO', description: "No Definido" }
    ];

    static getById(id) {
        return EnumTipoLibretaMilitar.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoLibretaMilitar.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoLibretaMilitar.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoLibretaMilitar;

