class EnumTiempoNovedades {
    static Fecha = 1;
    static Fecha_Hora = 2;

    static descriptions = [
        { id: EnumTiempoNovedades.Fecha, code: 'Fecha', description: 'Fecha' },
        { id: EnumTiempoNovedades.Fecha_Hora, code: 'Fecha_Hora', description: 'Fecha y Hora' },
    ];


    static getById(id) {
        return EnumTiempoNovedades.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumTiempoNovedades.descriptions;
    }

    static getByDescription(description) {
        return EnumTiempoNovedades.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumTiempoNovedades;

