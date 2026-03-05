class EnumTipoTransferencia {
    static CONSIGNACION = 1;
    static CHEQUE = 2;

    static descriptions = [
        { id: EnumTipoTransferencia.CONSIGNACION, code: 'CONSIGNACION', description: 'Consignación' },
        { id: EnumTipoTransferencia.CHEQUE, code: 'CHEQUE', description: 'Cheque' }
    ];

    static getById(id) {
        return EnumTipoTransferencia.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTipoTransferencia.descriptions;
    }

    static getByDescription(description) {
        return EnumTipoTransferencia.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTipoTransferencia;

