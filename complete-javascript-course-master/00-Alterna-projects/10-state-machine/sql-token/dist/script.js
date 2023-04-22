"use strict";
// Clase principal RecursiveDescentParser1
class RecursiveDescentParser1 {
    constructor(tokens) {
        this.index = 0;
        this.tokens = tokens;
    }
    // Obtener el token actual
    currentToken() {
        return this.tokens[this.index];
    }
    // Pasar al siguiente token
    nextToken() {
        this.index++;
        return this.currentToken();
    }
    // Verificar si el token actual coincide con el tipo esperado
    expectToken(expectedType) {
        const token = this.currentToken();
        if (token.type !== expectedType) {
            throw new Error(`Unexpected token type: expected ${expectedType}, got ${token.type}`);
        }
        this.nextToken();
        return token;
    }
    // Iniciar el análisis
    parse() {
        try {
            return this.parseSelectStatement();
        }
        catch (error) {
            if (error instanceof Error &&
                (error.message.startsWith('Invalid token') ||
                    error.message.startsWith('Unexpected token'))) {
                return false;
            }
            else {
                throw error;
            }
        }
    }
    // Analizar la declaración SELECT
    parseSelectStatement() {
        this.expectToken('SELECT');
        this.expectToken('COLUMN_NAME');
        this.parseFromClause();
        this.parseWhereClause();
        this.expectToken('EOF');
        return true;
    }
    // Analizar la cláusula FROM
    parseFromClause() {
        this.expectToken('FROM');
        this.expectToken('TABLE_NAME');
    }
    // Analizar la cláusula WHERE
    parseWhereClause() {
        if (this.currentToken().type === 'WHERE') {
            this.nextToken();
            this.parseCondition();
        }
        return null;
    }
    // Analizar la condición en la cláusula WHERE
    parseCondition() {
        this.expectToken('COLUMN_NAME');
        this.expectToken('OPERATOR');
        this.expectToken('VALUE');
    }
}
// Ejemplo de uso
const input = 'SELECT column1 FROM table2 WHERE column2 = 34'; // input inválido
const tokens1 = tokenize(input);
const parser1 = new RecursiveDescentParser1(tokens1);
const isValid = parser1.parse();
console.log(isValid);
// Función para tokenizar la entrada
function tokenize(input) {
    const regex = /\s*(SELECT|FROM|WHERE|[A-Za-z_][A-Za-z0-9_]*|<=|>=|<>|!=|<|>|=|\d+)\s*/g;
    const tokens = [];
    let match;
    let previousToken;
    while ((match = regex.exec(input)) !== null) {
        try {
            const type = getTokenType(match[1], previousToken);
            const value = match[1];
            tokens.push({ type, value });
            previousToken = { type, value };
        }
        catch (error) {
            if (error instanceof Error && error.message.startsWith('Invalid token')) {
                tokens.push({ type: 'INVALID', value: match[1] });
                break;
            }
            else {
                throw error;
            }
        }
    }
    tokens.push({ type: 'EOF', value: null });
    return tokens;
}
// Función para obtener el tipo de token
function getTokenType(token, previousToken) {
    switch (token.toUpperCase()) {
        case 'SELECT':
            return 'SELECT';
        case 'FROM':
            return 'FROM';
        case 'WHERE':
            return 'WHERE';
        case '=':
        case '<=':
        case '>=':
        case '<>':
        case '!=':
        case '<':
        case '>':
            return 'OPERATOR';
        default:
            if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(token)) {
                if (previousToken && previousToken.type === 'FROM') {
                    return 'TABLE_NAME';
                }
                return 'COLUMN_NAME';
            }
            else if (/^\d+$/.test(token)) {
                return 'VALUE';
            }
            else {
                throw new Error(`Invalid token: ${token}`);
            }
    }
}
