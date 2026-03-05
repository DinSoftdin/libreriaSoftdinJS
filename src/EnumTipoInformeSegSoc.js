class EnumTipoInformeSegSoc {
    static PILA = 1;
    static PROVISION = 2;

    static descriptions = [
        { id: EnumTipoInformeSegSoc.PILA, code: 'PILA', description: "PILA" },
        { id: EnumTipoInformeSegSoc.PROVISION, code: 'PROVISION', description: "Provisión" }
    ];

    static getById(id) {
        return EnumTipoInformeSegSoc.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoInformeSegSoc.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoInformeSegSoc.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoInformeSegSoc;
