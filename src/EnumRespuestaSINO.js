class EnumRespuestaSINO {
    static SI = 1;
    static NO = 0;

    static descriptions = [
        { id: EnumRespuestaSINO.SI, code: 'SI', description: 'Sí', description2: true },
        { id: EnumRespuestaSINO.NO, code: 'NO', description: 'No', description2: false },
    ];

    static getById(id) {
        return EnumRespuestaSINO.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumRespuestaSINO.descriptions;
    }

    static getByDescription(description) {
        return EnumRespuestaSINO.descriptions.find(item => item.description === description) || null;
    }

    static colorMapping = [
        { 'success': EnumRespuestaSINO.SI },
        { 'danger': EnumRespuestaSINO.NO },
    ];

    static getColors(campo) {
        const colorArray = {};

        for (const color of EnumRespuestaSINO.colorMapping) {
            const description = Object.values(color)[0];
            const descriptionEntry = EnumRespuestaSINO.descriptions.find(item => item.id === description);
            if (descriptionEntry) {
                colorArray[Object.keys(color)[0]] = descriptionEntry[campo];
            } else {
                colorArray[Object.keys(color)[0]] = null; // Handle the case where the field does not exist
            }
        }
        return colorArray;
    }

    static getColorName(campo, valor) {
        const colors = EnumRespuestaSINO.getColors(campo);
        return Object.keys(colors).find(key => colors[key] === valor);
    }

}

module.exports = EnumRespuestaSINO;
