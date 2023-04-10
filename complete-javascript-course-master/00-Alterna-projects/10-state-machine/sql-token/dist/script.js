"use strict";
console.log('Hola');
class RecursiveDescentParser1 {
    constructor(tokens) {
        this.index = 0;
        this.tokens = tokens;
    }
    currentToken() {
        return this.tokens[this.index];
    }
    nextToken() {
        this.index++;
        return this.currentToken();
    }
    expectToken(expectedType) {
        const token = this.currentToken();
        if (token.type !== expectedType) {
            throw new Error(`Unexpected token type: expected ${expectedType}, got ${token.type}`);
        }
        this.nextToken();
        return token;
    }
    parse() {
        return this.parseSelectStatement();
    }
    parseSelectStatement() {
        this.expectToken('SELECT');
        this.expectToken('COLUMN_NAME');
        this.parseFromClause();
        this.parseWhereClause();
        this.expectToken('EOF');
        return true;
    }
    parseFromClause() {
        this.expectToken('FROM');
        this.expectToken('TABLE_NAME');
    }
    parseWhereClause() {
        if (this.currentToken().type === 'WHERE') {
            this.nextToken();
            this.parseCondition();
        }
        return null;
    }
    parseCondition() {
        this.expectToken('COLUMN_NAME');
        this.expectToken('OPERATOR');
        this.expectToken('VALUE');
    }
}
// Example usage
const input = 'SELECT column1 FROM table2 WHERE column2 = 34';
const tokens1 = tokenize(input);
const parser1 = new RecursiveDescentParser1(tokens1);
const isValid = parser1.parse();
console.log(isValid);
function tokenize(input) {
    const regex = /\s*(SELECT|FROM|WHERE|[A-Za-z_][A-Za-z0-9_]*|<=|>=|<>|!=|<|>|=|\d+)\s*/g;
    const tokens = [];
    let match;
    while ((match = regex.exec(input)) !== null) {
        const type = getTokenType(match[1]);
        const value = match[1];
        tokens.push({ type, value });
    }
    tokens.push({ type: 'EOF', value: null });
    return tokens;
}
function getTokenType(token) {
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
                return /[A-Z]/.test(token.charAt(0)) ? 'COLUMN_NAME' : 'TABLE_NAME';
            }
            else if (/^\d+$/.test(token)) {
                return 'VALUE';
            }
            else {
                throw new Error(`Invalid token: ${token}`);
            }
    }
}
