class EnumEstadoCalendario {
    static NORMAL = 1;
    static FERIADO = 2;

    static descriptions = [
        { id: EnumEstadoCalendario.NORMAL, code: 'NORMAL', description: 'Normal' },
        { id: EnumEstadoCalendario.FERIADO, code: 'FERIADO', description: 'Feriado' },
    ];

    static getById(id) {
        return EnumEstadoCalendario.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumEstadoCalendario.descriptions;
    }

    static getByDescription(description) {
        return EnumEstadoCalendario.descriptions.find(item => item.description === description) || null;
    }

    static colorMapping = {
        'primary': EnumEstadoCalendario.NORMAL,
        'danger': EnumEstadoCalendario.FERIADO, // Default color for unknown states
    };

    static getColors(campo) {
        const colorArray = {};

        for (const [color, description] of Object.entries(EnumEstadoCalendario.colorMapping)) {
            const descriptionEntry = EnumEstadoCalendario.descriptions.find(item => item.id === description);
            if (descriptionEntry) {
                colorArray[color] = descriptionEntry[campo];
            } else {
                colorArray[color] = null; // Manejar el caso en que el campo no exista
            }
        }
        return colorArray;
    }

    static getColorName(campo, valor) {
        const colors = EnumEstadoCalendario.getColors(campo);
        return Object.keys(colors).find(color => colors[color] === valor);
    }
}

module.exports = EnumEstadoCalendario;