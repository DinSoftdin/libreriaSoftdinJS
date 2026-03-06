/**
 * Enumeración de operadores matemáticos y de agrupación.
 */
class EnumOperadores {
    static CORCHETE_A = 1;
    static CORCHETE_C = 2;
    static PARENTESIS_A = 3;
    static PARENTESIS_C = 4;
    static SUMA = 5;
    static RESTA = 6;
    static MULTIPLICACION = 7;
    static DIVISION = 8;

    static descriptions = [
        { id: EnumOperadores.CORCHETE_A, code: '[', description: 'Corchete Abierto' },
        { id: EnumOperadores.CORCHETE_C, code: ']', description: 'Corchete Cerrado' },
        { id: EnumOperadores.PARENTESIS_A, code: '(', description: 'Paréntesis Abierto' },
        { id: EnumOperadores.PARENTESIS_C, code: ')', description: 'Paréntesis Cerrado' },
        { id: EnumOperadores.SUMA, code: '+', description: 'Suma' },
        { id: EnumOperadores.RESTA, code: '-', description: 'Resta' },
        { id: EnumOperadores.MULTIPLICACION, code: '*', description: 'Multiplicación' },
        { id: EnumOperadores.DIVISION, code: '/', description: 'División' },
    ];

    /**
     * Obtiene un elemento por su identificador.
     * @param {number} id - Identificador del elemento.
     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
     */
    static getById(id) {
        return EnumOperadores.descriptions.find(item => item.id === id) || null;
    }

    /**
     * Obtiene todos los elementos de la enumeración.
     * @returns {Array} Lista de objetos con id, code y description.
     */
    static getAll() {
        return EnumOperadores.descriptions;
    }

    /**
     * Obtiene un elemento por su descripción.
     * @param {string} description - Descripción del elemento.
     * @returns {Object|null} El objeto con id, code y description, o null si no existe.
     */
    static getByDescription(description) {
        return EnumOperadores.descriptions.find(item => item.description === description) || null;
    }
}

module.exports = EnumOperadores;
