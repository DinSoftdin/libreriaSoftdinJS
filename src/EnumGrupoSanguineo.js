class EnumGrupoSanguineo {
    static Amas = 1;
    static Amenos = 2;
    static ABmas = 3;
    static ABmenos = 4;
    static Bmas = 5;
    static Bmenos = 6;
    static Omas = 7;
    static Omenos = 8;
    static noDefinido = 0;

    static descriptions = [
        { id: EnumGrupoSanguineo.Amas, code: 'Amas', description: 'A+' },
        { id: EnumGrupoSanguineo.Amenos, code: 'Amenos', description: 'A-' },
        { id: EnumGrupoSanguineo.ABmas, code: 'ABmas', description: 'AB+' },
        { id: EnumGrupoSanguineo.ABmenos, code: 'ABmenos', description: 'AB-' },
        { id: EnumGrupoSanguineo.Bmas, code: 'Bmas', description: 'B+' },
        { id: EnumGrupoSanguineo.Bmenos, code: 'Bmenos', description: 'B-' },
        { id: EnumGrupoSanguineo.Omas, code: 'Omas', description: 'O+' },
        { id: EnumGrupoSanguineo.Omenos, code: 'Omenos', description: 'O-' },
        { id: EnumGrupoSanguineo.noDefinido, code: 'noDefinido', description: 'NO DEFINIDO' },
    ];

    static getById(id) {
        return EnumGrupoSanguineo.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumGrupoSanguineo.descriptions;
    }

    static getByDescription(description) {
        return EnumGrupoSanguineo.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumGrupoSanguineo;
