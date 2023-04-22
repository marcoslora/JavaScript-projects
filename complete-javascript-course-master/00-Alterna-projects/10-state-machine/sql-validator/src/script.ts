type ParseOutputItemPart =
  | {
      terminal: true;
      capture: string;
    }
  | {
      terminal: false;
      variable: string;
      capture: string;
      result: ParseOutputItem;
    };

type ParseOutputItem = {
  rawInput: string;
  parts: ParseOutputItemPart[];
  lastIndex: number;
} & (
  | {
      accepted: true;
    }
  | {
      accepted: false;
      error: string;
      result?: ParseOutputItem;
    }
);

/*
START -> 
  | <SELECT_STMT>
*/
function Start(input: string, index: number): ParseOutputItem {
  return SelectStmt(input, index);
}

/*
SELECT_STMT -> 
  | SELECT <ColumnName> <ColumnName> <CLAUSE_FROM> <CLAUSE_WHERE>
  | SELECT <ColumnName> <CLAUSE_FROM>
*/
function SelectStmt(input: string, index: number): ParseOutputItem {
  const terminal1 = 'SELECT ';
  const read = input.substring(index, terminal1.length);
  if (read !== terminal1) {
    return {
      accepted: false,
      error: "Could not read 'SELECT '",
      rawInput: input,
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
    };
  }

  const columnNameResult = ColumnName(input, index + read.length);
  if (!columnNameResult.accepted) {
    return {
      accepted: false,
      error: 'Could not read ColumnName',
      rawInput: input,
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
    };
  }

  const lastIndexColumnName = columnNameResult.lastIndex;

  const readSpace = input.substring(
    lastIndexColumnName,
    lastIndexColumnName + 1
  );
  if (readSpace !== ' ') {
    return {
      accepted: false,
      error: "Could not read ' ' after ColumnName",
      rawInput: input,
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
    };
  }

  const clauseFromResult = ClauseFrom(
    input,
    lastIndexColumnName + readSpace.length
  );

  if (!clauseFromResult.accepted) {
    return {
      accepted: false,
      error: 'Could not read CLAUSE_FROM',
      rawInput: input,
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
      result: clauseFromResult,
    };
  }

  const lastIndex = clauseFromResult.lastIndex;

  const resultUpToHere: ParseOutputItem = {
    accepted: true,
    lastIndex: lastIndex,
    rawInput: input.substring(index, lastIndex),
    parts: [
      {
        terminal: true,
        capture: read,
      },
      {
        terminal: false,
        variable: 'CLAUSE_FROM',
        capture: input.substring(read.length, lastIndex),
        result: clauseFromResult,
      },
    ],
  };

  const read2 = input.substring(lastIndex, lastIndex + 1);
  if (read2 === ' ') {
    const whereClauseResult = ClauseWhere(input, lastIndex + read2.length);
    if (!whereClauseResult.accepted) {
      return resultUpToHere;
    }

    const lastIndex2 = whereClauseResult.lastIndex;

    return {
      accepted: true,
      rawInput: input.substring(index, lastIndex2),
      lastIndex: lastIndex2,
      parts: [
        ...resultUpToHere.parts,
        {
          terminal: true,
          capture: read2,
        },
        {
          terminal: false,
          variable: 'CLAUSE_WHERE',
          capture: input.substring(lastIndex + read2.length, lastIndex2),
          result: whereClauseResult,
        },
      ],
    };
  } else {
    return resultUpToHere;
  }
}

/*

CLAUSE_FROM -> 
  | FROM <TableName>

*/
function ClauseFrom(input: string, index: number): ParseOutputItem {
  const terminal1 = 'FROM ';
  const read = input.substring(index, index + terminal1.length);
  if (read !== terminal1) {
    return {
      accepted: false,
      error: "Could not read 'FROM '",
      rawInput: input.substring(index),
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
    };
  }

  const tableNameResult = TableName(input, index + terminal1.length);

  if (!tableNameResult.accepted) {
    return {
      accepted: false,
      error: 'Could not read TableName',
      rawInput: input,
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
    };
  }

  const lastIndex = tableNameResult.lastIndex;

  const result: ParseOutputItem = {
    accepted: true,
    lastIndex: lastIndex,
    rawInput: input.substring(index, lastIndex),
    parts: [
      {
        terminal: true,
        capture: read,
      },
      {
        terminal: false,
        variable: 'TableName',
        capture: input.substring(index + read.length, lastIndex),
        result: tableNameResult,
      },
    ],
  };

  return result;
}

/*

CLAUSE_WHERE -> 
  | WHERE <CONDITION>

*/
function ClauseWhere(input: string, index: number): ParseOutputItem {
  const terminal1 = 'WHERE ';
  const read = input.substring(index, index + terminal1.length);
  if (read !== terminal1) {
    return {
      accepted: false,
      error: "Could not read 'WHERE '",
      rawInput: input,
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
    };
  }

  const conditionResult = Condition(input, index + terminal1.length);

  if (!conditionResult.accepted) {
    return {
      accepted: false,
      error: 'Could not read Condition',
      rawInput: input,
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
    };
  }

  const lastIndex = conditionResult.lastIndex;

  const result: ParseOutputItem = {
    accepted: true,
    lastIndex: lastIndex,
    rawInput: input.substring(index, lastIndex),
    parts: [
      {
        terminal: true,
        capture: read,
      },
      {
        terminal: false,
        variable: 'CONDITION',
        capture: input.substring(read.length, lastIndex),
        result: conditionResult,
      },
    ],
  };

  return result;
}

/*

CONDITION -> 
  | <ColumnName> <OPERATOR> <VALUE>

*/
function Condition(input: string, index: number): ParseOutputItem {
  const parts: ParseOutputItemPart[] = [];

  const columnNameResult = ColumnName(input, index);
  if (!columnNameResult.accepted) {
    return {
      accepted: false,
      error: 'Could not read ColumnName',
      rawInput: input,
      parts: [
        {
          capture: input,
          terminal: true,
        },
      ],
      lastIndex: index,
    };
  }

  const lastIndex = columnNameResult.lastIndex;
  parts.push({
    terminal: false,
    variable: 'ColumnName',
    capture: input.substring(index, lastIndex),
    result: columnNameResult,
  });

  const read1 = input.substring(lastIndex, lastIndex + 1);
  if (read1 !== ' ') {
    return {
      accepted: false,
      error: "Could not read ' ' after ColumnName",
      rawInput: input,
      parts: parts,
      lastIndex: index,
    };
  }

  parts.push({
    terminal: true,
    capture: read1,
  });

  const operatorResult = Operator(input, lastIndex + read1.length);
  if (!operatorResult.accepted) {
    return {
      accepted: false,
      error: 'Could not read Operator',
      rawInput: input,
      parts: parts,
      lastIndex: lastIndex + read1.length,
    };
  }

  const lastIndex2 = operatorResult.lastIndex;
  parts.push({
    terminal: false,
    variable: 'OPERATOR',
    capture: input.substring(lastIndex + read1.length, lastIndex2),
    result: operatorResult,
  });

  const read2 = input.substring(lastIndex2, lastIndex2 + 1);
  if (read2 !== ' ') {
    return {
      accepted: false,
      error: "Could not read ' ' after Operator",
      rawInput: input,
      parts: parts,
      lastIndex: index,
    };
  }

  parts.push({
    terminal: true,
    capture: read2,
  });

  const valueResult = Value(input, lastIndex2 + read2.length);
  if (!valueResult.accepted) {
    return {
      accepted: false,
      error: 'Could not read Value',
      rawInput: input,
      parts: parts,
      lastIndex: lastIndex2 + read2.length,
    };
  }

  const lastIndex3 = valueResult.lastIndex;
  parts.push({
    terminal: false,
    variable: 'Value',
    capture: input.substring(lastIndex2 + read2.length, lastIndex3),
    result: valueResult,
  });

  return {
    accepted: true,
    lastIndex: lastIndex3,
    rawInput: input.substring(index, lastIndex3),
    parts: parts,
  };
}

/*

OPERATOR -> 
  | '=' 

*/
function Operator(input: string, index: number): ParseOutputItem {
  const read1 = input.substring(index, index + 1);
  if (read1 !== '=') {
    return {
      accepted: false,
      error: "Could not read '='",
      rawInput: input,
      parts: [],
      lastIndex: index,
    };
  }

  return {
    accepted: true,
    rawInput: input.substring(index, index + read1.length),
    lastIndex: index + read1.length,
    parts: [
      {
        terminal: true,
        capture: read1,
      },
    ],
  };
}

/*

TableName ->
  | 'table1'
  | 'table2'

*/
function TableName(input: string, index: number): ParseOutputItem {
  const terminal1 = 'table';

  const read1 = input.substring(index, index + terminal1.length);
  if (read1 !== terminal1) {
    return {
      accepted: false,
      error: "Could not read 'table'",
      rawInput: input,
      parts: [],
      lastIndex: index,
    };
  }

  const lastIndex = index + read1.length;
  const read2 = input.substring(lastIndex, lastIndex + 1);
  if (['1', '2'].indexOf(read2) < 0) {
    return {
      accepted: false,
      error: "Could not read '1' or '2'",
      rawInput: input,
      parts: [],
      lastIndex: index,
    };
  }

  const lastIndex2 = lastIndex + read2.length;

  return {
    accepted: true,
    rawInput: input.substring(index, lastIndex2),
    lastIndex: lastIndex2,
    parts: [
      {
        terminal: true,
        capture: input.substring(index, lastIndex2),
      },
    ],
  };
}

/*

ColumnName ->
  | 'column1'
  | 'column2'

*/
function ColumnName(input: string, index: number): ParseOutputItem {
  const terminal1 = 'column';

  const read1 = input.substring(index, index + terminal1.length);
  if (read1 !== terminal1) {
    return {
      accepted: false,
      error: "Could not read 'column'",
      rawInput: input,
      parts: [],
      lastIndex: index,
    };
  }

  const lastIndex = index + read1.length;
  const read2 = input.substring(lastIndex, lastIndex + 1);
  if (['1', '2'].indexOf(read2) < 0) {
    return {
      accepted: false,
      error: "Could not read '1' or '2'",
      rawInput: input,
      parts: [],
      lastIndex: index,
    };
  }

  const lastIndex2 = lastIndex + read2.length;

  return {
    accepted: true,
    rawInput: input.substring(index, lastIndex2),
    lastIndex: lastIndex2,
    parts: [
      {
        terminal: true,
        capture: input.substring(index, lastIndex2),
      },
    ],
  };
}

/*

VALUE ->
  | 34
  | 'José'

*/
function Value(input: string, index: number): ParseOutputItem {
  const terminal1 = '34';
  const terminal2 = "'José'";

  const read1 = input.substring(index, index + terminal1.length);
  if (read1 === terminal1) {
    return {
      accepted: true,
      rawInput: input.substring(index, index + read1.length),
      parts: [
        {
          terminal: true,
          capture: input.substring(index, index + read1.length),
        },
      ],
      lastIndex: index + read1.length,
    };
  }

  const read2 = input.substring(index, index + terminal2.length);
  if (read2 === terminal2) {
    return {
      accepted: true,
      rawInput: input.substring(index, index + read2.length),
      parts: [
        {
          terminal: true,
          capture: input.substring(index, index + read2.length),
        },
      ],
      lastIndex: index + read2.length,
    };
  }

  return {
    accepted: false,
    error: 'Could not read a vaid Value',
    rawInput: input.substring(index),
    lastIndex: index,
    parts: [],
  };
}

function parse(input: string): ParseOutputItem {
  const result = Start(input, 0);
  if (result.accepted) {
    if (result.lastIndex === input.length) {
      return {
        ...result,
        accepted: true,
      };
    }
    return {
      ...result,
      accepted: false,
      error: "Input string was accepted but didn't end properly",
    };
  }
  return result;
}

const input = 'SELECT column2 FROM table2 WHERE column2 = 34';

if (input) {
  console.log(parse(input));
}
