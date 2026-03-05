class EnumStatusWeb {
    static INICIO = 1;
    static PROCESO = 2;
    static APROBADO = 3;
    static ANULADO = 4;

    static descriptions = [
        { id: EnumStatusWeb.INICIO, code: 'INICIO', description: 'Inicio' },
        { id: EnumStatusWeb.PROCESO, code: 'PROCESO', description: 'Proceso' },
        { id: EnumStatusWeb.APROBADO, code: 'APROBADO', description: 'Aprobado' },
        { id: EnumStatusWeb.ANULADO, code: 'ANULADO', description: 'Anulado' },
    ];

    static getCollection() {
        return EnumStatusWeb.descriptions;
    }

    static getById(id) {
        return EnumStatusWeb.getCollection().find(item => item.id === id) || null;
    }

    static colorMapping = {
        'primary': EnumStatusWeb.INICIO,
        'warning': EnumStatusWeb.PROCESO,
        'success': EnumStatusWeb.APROBADO,
        'danger': EnumStatusWeb.ANULADO, // Default color for unknown states
    };

    static getColors(campo) {
        const colorArray = {};

        for (const [color, description] of Object.entries(EnumStatusWeb.colorMapping)) {
            const descriptionEntry = EnumStatusWeb.descriptions.find(item => item.id === description);
            if (descriptionEntry) {
                colorArray[color] = descriptionEntry[campo];
            } else {
                colorArray[color] = null; // Manejar el caso en que el campo no exista
            }
        }
        return colorArray;
    }

    static getAll() {
        return EnumStatusWeb.descriptions;
    }

    static getByDescription(description) {
        return EnumStatusWeb.getCollection().find(item => item.description === description) || null;
    }

    static getColorName(campo, valor) {
        const colors = EnumStatusWeb.getColors(campo);
        return Object.keys(colors).find(color => colors[color] === valor);
    }
}

module.exports = EnumStatusWeb;