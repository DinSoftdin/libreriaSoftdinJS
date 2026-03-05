class EnumArchivoPlano {
    static BANCO_BOGOTA = 1;
    static BANCOLOMBIA = 2;
    static BANCO_GRANAHORRAR = 3;
    static BANCO_BBVA = 4;
    static JURISCOL = 5;

    static descriptions = [
        { id: EnumArchivoPlano.BANCO_BOGOTA, code: 'BANCO_BOGOTA', description: 'BANCO DE BOGOTA' },
        { id: EnumArchivoPlano.BANCOLOMBIA, code: 'BANCOLOMBIA', description: 'BANCOLOMBIA' },
        { id: EnumArchivoPlano.BANCO_GRANAHORRAR, code: 'BANCO_GRANAHORRAR', description: 'BANCO DE GRANAHORRAR' },
        { id: EnumArchivoPlano.BANCO_BBVA, code: 'BANCO_BBVA', description: 'BANCO BBVA' },
        { id: EnumArchivoPlano.JURISCOL, code: 'JURISCOL', description: 'JURISCOL' },
    ];

    static getById(id) {
        return EnumArchivoPlano.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumArchivoPlano.descriptions;
    }

    static getByDescription(description) {
        return EnumArchivoPlano.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumArchivoPlano;