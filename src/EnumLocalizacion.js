class EnumLocalizacion {
    static TELEFONO = 1;
    static CELULAR = 2;
    static BIPER = 3;
    static EMAIL = 4;
    static EMERGENCIAS = 5;
    static CELULAR_TRABAJO = 6;
    static SITIO_WEB = 7;
    static FACEBOOK = 8;
    static INSTAGRAM = 9;
    static TWITTER = 10;
    static LINKEDIN = 11;
    static YOUTUBE = 12;
    static GEOLOCALIZACION = 13;

    static descriptions = [
        { id: EnumLocalizacion.TELEFONO, code: 'TELEFONO', description: 'Teléfono' },
        { id: EnumLocalizacion.CELULAR, code: 'CELULAR', description: 'Celular' },
        { id: EnumLocalizacion.BIPER, code: 'BIPER', description: 'Biper' },
        { id: EnumLocalizacion.EMAIL, code: 'EMAIL', description: 'Email' },
        { id: EnumLocalizacion.EMERGENCIAS, code: 'EMERGENCIAS', description: 'Emergencias' },
        { id: EnumLocalizacion.CELULAR_TRABAJO, code: 'CELULAR_TRABAJO', description: 'Celular de Trabajo' },
        { id: EnumLocalizacion.SITIO_WEB, code: 'SITIO_WEB', description: 'Sitio Web' },
        { id: EnumLocalizacion.FACEBOOK, code: 'FACEBOOK', description: 'Facebook' },
        { id: EnumLocalizacion.INSTAGRAM, code: 'INSTAGRAM', description: 'Instagram' },
        { id: EnumLocalizacion.TWITTER, code: 'TWITTER', description: 'Twitter' },
        { id: EnumLocalizacion.LINKEDIN, code: 'LINKEDIN', description: 'LinkedIn' },
        { id: EnumLocalizacion.YOUTUBE, code: 'YOUTUBE', description: 'YouTube' },
        { id: EnumLocalizacion.GEOLOCALIZACION, code: 'GEOLOCALIZACION', description: 'Geolocalización' }
    ];

    static getById(id) {
        return EnumLocalizacion.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumLocalizacion.descriptions;
    }

    static getByDescription(description) {
        return EnumLocalizacion.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumLocalizacion;
