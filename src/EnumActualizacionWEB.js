export class EnumActualizacionWEB {
    static REGISTRADO = 1;
    static NO_REGISTRADO = 3;
    static ESPERANDO_GUARDAR = 2;
    static ACTUALIZADO = 4;
    static DESACTUALIZADO = 5;
    static NO_SUBIDO_WEB = 6;
    static ACTIVO = 7;
    static INACTIVO = 8;

    static descriptions = [
        { id: EnumActualizacionWEB.REGISTRADO, code: 'REGISTRADO', description: "Registrado" },
        { id: EnumActualizacionWEB.NO_REGISTRADO, code: 'NO_REGISTRADO', description: "No Registrado" },
        { id: EnumActualizacionWEB.ESPERANDO_GUARDAR, code:  'ESPERANDO_GUARDAR', description:  "Esperando Guardar"},
        { id: EnumActualizacionWEB.ACTUALIZADO, code:  'ACTUALIZADO', description:  "Actualizado"},
        { id: EnumActualizacionWEB.DESACTUALIZADO, code:  'DESACTUALIZADO', description:  "Desactualizado"},
        { id: EnumActualizacionWEB.NO_SUBIDO_WEB, code:  'NO_SUBIDO_WEB', description:  "No Subido a la Web"},
        { id: EnumActualizacionWEB.ACTIVO, code:  'ACTIVO', description:  "Activo"},
        { id: EnumActualizacionWEB.INACTIVO, code: 'INACTIVO', description: "Inactivo" }
    ];

    static getById(id) {
        return EnumActualizacionWEB.descriptions.find(item => item.id === id) || null;
    }

    static getAll() {
        return EnumActualizacionWEB.descriptions;
    }

    static getByDescription(description) {
        return EnumActualizacionWEB.descriptions.find(item => item.description === description) || null;
    }
}

// module.exports = EnumActualizacionWEB;

// Ejemplo de uso
// console.log(EnumActualizacionWEB.getById(1)); // Imprime el objeto de la enumeración con ID 1
