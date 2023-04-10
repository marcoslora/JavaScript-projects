console.log('Hola');

// type TokenType =
//   | 'SELECT'
//   | 'FROM'
//   | 'WHERE'
//   | 'COLUMN_NAME'
//   | 'TABLE_NAME'
//   | 'OPERATOR'
//   | 'VALUE'
//   | 'EOF';

// type Token = {
//   type: TokenType;
//   value: any;
// };

// class RecursiveDescentParser {
//   private index: number;
//   private tokens: Token[];

//   constructor(tokens: Token[]) {
//     this.index = 0;
//     this.tokens = tokens;
//   }

//   currentToken(): Token {
//     return this.tokens[this.index];
//   }

//   nextToken(): Token {
//     this.index++;
//     return this.currentToken();
//   }

//   expectToken(type: TokenType): Token {
//     const token = this.currentToken();
//     if (token.type !== type) {
//       throw new Error(
//         `Unexpected token type: expected ${type}, got ${token.type}`
//       );
//     }
//     this.nextToken();
//     return token;
//   }

//   parse(): any {
//     return this.parseSelectStatement();
//   }

//   parseSelectStatement(): any {
//     this.expectToken('SELECT');
//     const column = this.expectToken('COLUMN_NAME');
//     this.parseFromClause();
//     const where = this.parseWhereClause();
//     return { type: 'select', column, where };
//   }

//   parseFromClause(): any {
//     this.expectToken('FROM');
//     this.expectToken('TABLE_NAME');
//   }

//   parseWhereClause(): any | null {
//     if (this.currentToken().type === 'WHERE') {
//       this.nextToken();
//       return this.parseCondition();
//     }
//     return null;
//   }

//   parseCondition(): any {
//     const column = this.expectToken('COLUMN_NAME');
//     const operator = this.expectToken('OPERATOR');
//     const value = this.expectToken('VALUE');
//     return { type: 'condition', column, operator, value };
//   }
// }

// // Example usage
// const tokens: Token[] = [
//   { type: 'SELECT', value: 'SELECT' },
//   { type: 'COLUMN_NAME', value: 'column1' },
//   { type: 'FROM', value: 'FROM' },
//   { type: 'TABLE_NAME', value: 'table2' },
//   { type: 'WHERE', value: 'WHERE' },
//   { type: 'COLUMN_NAME', value: 'column2' },
//   { type: 'OPERATOR', value: '=' },
//   { type: 'VALUE', value: 34 },
//   { type: 'EOF', value: null },
// ];

// const parser = new RecursiveDescentParser(tokens);
// const ast = parser.parse();
// console.log(ast);

type TokenType1 =
  | 'SELECT'
  | 'FROM'
  | 'WHERE'
  | 'COLUMN_NAME'
  | 'TABLE_NAME'
  | 'OPERATOR'
  | 'VALUE'
  | 'EOF';

type Token1 = {
  type: TokenType1;
  value: any;
};

class RecursiveDescentParser1 {
  private index: number;
  private tokens: Token1[];

  constructor(tokens: Token1[]) {
    this.index = 0;
    this.tokens = tokens;
  }

  private currentToken(): Token1 {
    return this.tokens[this.index];
  }

  private nextToken(): Token1 {
    this.index++;
    return this.currentToken();
  }

  private expectToken(expectedType: string): Token1 {
    const token = this.currentToken();
    if (token.type !== expectedType) {
      throw new Error(
        `Unexpected token type: expected ${expectedType}, got ${token.type}`
      );
    }
    this.nextToken();
    return token;
  }

  public parse(): any {
    return this.parseSelectStatement();
  }

  private parseSelectStatement(): any {
    this.expectToken('SELECT');
    this.expectToken('COLUMN_NAME');
    this.parseFromClause();
    this.parseWhereClause();
    this.expectToken('EOF');
    return true;
  }

  private parseFromClause(): any {
    this.expectToken('FROM');
    this.expectToken('TABLE_NAME');
  }

  private parseWhereClause(): any | null {
    if (this.currentToken().type === 'WHERE') {
      this.nextToken();
      this.parseCondition();
    }
    return null;
  }

  private parseCondition(): any {
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

function tokenize(input: string): Token1[] {
  const regex =
    /\s*(SELECT|FROM|WHERE|[A-Za-z_][A-Za-z0-9_]*|<=|>=|<>|!=|<|>|=|\d+)\s*/g;
  const tokens: Token1[] = [];
  let match;
  while ((match = regex.exec(input)) !== null) {
    const type = getTokenType(match[1]);
    const value = match[1];
    tokens.push({ type, value });
  }
  tokens.push({ type: 'EOF', value: null });
  return tokens;
}

function getTokenType(token: string): TokenType1 {
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
      } else if (/^\d+$/.test(token)) {
        return 'VALUE';
      } else {
        throw new Error(`Invalid token: ${token}`);
      }
  }
}
