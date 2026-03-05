class EnumRegimenExcepcionSSS {
    static No_Aplica = 0;
    static Decreto_1828_Artc_7 = 1;

    static descriptions = [
        { id: EnumRegimenExcepcionSSS.No_Aplica, code: 'No_Aplica', description: 'No Aplica' },
        { id: EnumRegimenExcepcionSSS.Decreto_1828_Artc_7, code: 'Decreto_1828_Artc_7', description: 'Decreto 1828 Artículo 7' },
    ];

    static getById(id) {
        return EnumRegimenExcepcionSSS.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumRegimenExcepcionSSS.descriptions;
    }

    static getByDescription(description) {
        return EnumRegimenExcepcionSSS.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumRegimenExcepcionSSS;
