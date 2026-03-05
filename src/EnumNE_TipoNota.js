class EnumNE_TipoNota {
    static Reemplazar = 1;
    static Eliminar = 2;

    static descriptions = [
        { id: EnumNE_TipoNota.Reemplazar, code: 'Reemplazar', description: 'Reemplazar' },
        { id: EnumNE_TipoNota.Eliminar, code: 'Eliminar', description: 'Eliminar' },
    ];

    static getCollection() {
        return EnumNE_TipoNota.descriptions;
    }

    static getById(id) {
        return EnumNE_TipoNota.getCollection().find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumNE_TipoNota.descriptions;
    }

    static getByDescription(description) {
        return EnumNE_TipoNota.getCollection().find(item => item.description === description) || null;
    }
}

module.exports = EnumNE_TipoNota;