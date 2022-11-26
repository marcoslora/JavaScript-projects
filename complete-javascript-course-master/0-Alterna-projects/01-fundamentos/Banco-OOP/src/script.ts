//0-Alterna\ projects/01-fundamentos/Banco-OOP
//parseInt cambia de string a numero
//toString de numero a string
//padStart(number, '') a un string
//Json.jsinify

/*
Alterna Bank & Trust
*/

/*
Cliente

Nombre y Apellido
Correo Electrónico
Identificación (Cédula / Pasaporte)
Teléfono

Cuentas
Balance
Tipo: (Ahorros/Corriente)
Moneda: RD$ | US$
Numero de Cuenta

Transacciones
Monto
Moneda
Tipos
Depositos
Retiros
Transfers
Deducciones

Historial
*/

type ID = {
  idType: 'cedula' | 'pasaporte';
  value: string;
};

type Currency = 'DOP' | 'USD';

type Customer = {
  fullName: string;
  email: string;
  id: ID;
  phone: string;
  accounts: Account[];
};

type Account = {
  accountNumber: string;
  balance: number;
  currency: Currency;
  accountType: 'checking' | 'savings';
  transactions: Transaction[];
};

type Transaction = {
  transactionId: string;
  transactionDate: number;
  amount: number;
  currency: Currency;
  notes?: string;
} & (
  | {
      transactionType: 'deposit';
      destination: string;
    }
  | {
      transactionType: 'withdrawal' | 'transfer';
    }
);

const eliRey: Customer = {
  fullName: 'Eli Rey David',
  id: { idType: 'cedula', value: '402-1012641-9' },
  email: 'edj617@gmail.com',
  phone: '829-455-1572',
  accounts: [],
};

const esmerlyn: Customer = {
  fullName: 'Esmerlyn Ledesma',
  id: { idType: 'cedula', value: '402-0895929-2' },
  email: 'ledesmaesmerlyn@gmail.com',
  phone: '829-708-9989',
  accounts: [],
};

/*
  1. Verificar el balance para que sea por encima de 3000 DOP o 60 USD
  1.1 Si no lo es, devolver error y terminar la función
  2. Crear un nuevo objeto cuenta con la información necesaria
  3. Agregar la cuenta al cliente
  4. Retornar el cliente
  */

function createNewAccount(
  customer: Customer,
  openingBalance: number,
  accountType: 'checking' | 'savings',
  currency: Currency
): string {
  switch (currency) {
    case 'DOP':
      if (openingBalance <= 3000) {
        return 'Error: El balance inicial debe ser mayor que RD$3000.';
      }
      break;
    case 'USD':
      if (openingBalance <= 60) {
        return 'Error: El balance inicial debe ser mayor de US$60.';
      }
      break;
  }
  const calculateNewAccountNumber = () => {
    const id = customer.id.value;
    let firstFourDigits = '';
    for (let i = id.length - 5; i < id.length; i += 1) {
      if (id[i] === '-') {
        continue;
      }
      firstFourDigits += id[i];
    }

    const previousAccounts = customer.accounts;
    let lastFourDigits = '';
    if (previousAccounts.length > 0) {
      const lastAccountNumber =
        previousAccounts[previousAccounts.length - 1].accountNumber;
      const prevFourDigits = lastAccountNumber.slice(
        lastAccountNumber.length - 4
      );
      const newNumber = parseInt(prevFourDigits) + 1;
      lastFourDigits = newNumber.toString().padStart(4, '0');
    } else {
      lastFourDigits = '0001';
    }
    return firstFourDigits + lastFourDigits;
  };

  const newAccount: Account = {
    accountNumber: calculateNewAccountNumber(),
    accountType: accountType,
    currency: currency,
    balance: openingBalance,
    transactions: [],
  };
  customer.accounts.push(newAccount);
  return `Cuenta creada exitosamente - Número: ${newAccount.accountNumber} - Moneda: ${newAccount.currency} - Balance: ${newAccount.balance}`;
}

function getCustomerById(customerId: string) {
  let customer: Customer | undefined;

  for (let i = 0; i < allCustomers.length; i = i + 1) {
    if (allCustomers[i].id.value === customerId) {
      customer = allCustomers[i];
      break;
    }
  }
  return customer;
}

function getAccountById(customer: Customer, accountNumber: string) {
  let account: Account | undefined;

  for (let i = 0; i < customer.accounts.length; i = i + 1) {
    if (customer.accounts[i].accountNumber === accountNumber) {
      account = customer.accounts[i];
      break;
    }
  }
  return account;
}
/*
  1. Buscar el cliente. Verificar que el cliente existe*
  2. Buscar la cuenta. Verificar que la cuenta existe *
  3. Verificar la moneda de la cuenta a ver si son iguales *
  3.1 Si no lo son, entonces devolver error *
  4. Aumentar el balance de la cuenta con el monto del depósito *
  5. Almacenar la transacción en la cuenta del cliente. *
  6. Devolver un mensaje con el nuevo balance de la cuenta *
  */
function newTransaction(
  amount: number,
  customerId: string,
  accountNumber: string,
  currency: Currency,
  transactionType: 'deposit' | 'withdrawal',
  notes?: string
) {
  const customer = getCustomerById(customerId);
  if (!customer) {
    return 'Error: Cliente no encontrado.';
  }

  const account = getAccountById(customer, accountNumber);
  if (!account) {
    return `Error: Cuenta ${
      transactionType === 'deposit' ? 'destino' : 'origen'
    } no fue encontrada`;
  }

  if (account.currency !== currency) {
    return `Error: La moneda de la cuenta ${
      transactionType === 'deposit' ? 'destino' : 'origen'
    } no es compatible con la moneda de la transacción`;
  }
  if (transactionType === 'withdrawal') {
    if (account.balance < amount) {
      return 'Error: Balance insuficiente para realizar esta transacción';
    }
  }
  if (transactionType === 'deposit') {
    account.balance = account.balance + amount;
  } else {
    account.balance = account.balance - amount;
  }

  // const transactionId = Math.trunc(Math.random() * Math.pow(10, 10)).toString()
  const transaction: Transaction = {
    transactionType: transactionType,
    amount: amount,
    currency: currency,
    destination: transactionType === 'deposit' ? account.accountNumber : '',
    transactionDate: Date.now(),
    transactionId: crypto.randomUUID(),
    notes: notes ?? 'Sin comentarios',
  };
  account.transactions.push(transaction);
  return `${
    transactionType === 'deposit' ? 'Depósito' : 'Retiro'
  } completado. El nuevo balance de la cuenta ${accountNumber} es ${
    account.balance
  }`;
}

function transfer(
  originCustomerId: string,
  destinationCustomerId: string,
  originAccountId: string,
  destinationAccountId: string,
  amount: number,
  currency: Currency,
  notes?: string
) {
  if (originCustomerId === destinationCustomerId) {
    return 'Error: El cliente origen y destino es el mismo';
  }
  if (originAccountId === destinationAccountId) {
    return 'Error: La cuenta origen y destino es la misma';
  }
  const withdrawalMessage = newTransaction(
    amount,
    originCustomerId,
    originAccountId,
    currency,
    'withdrawal',
    `Transferencia hacia ${destinationAccountId}`
  );
  if (withdrawalMessage.startsWith('Error')) {
    return withdrawalMessage;
  }
  const depositMessage = newTransaction(
    amount,
    destinationCustomerId,
    destinationAccountId,
    currency,
    'deposit',
    `Transferencia desde ${originAccountId}`
  );
  if (depositMessage.startsWith('Error')) {
    newTransaction(
      amount,
      originCustomerId,
      originAccountId,
      currency,
      'deposit',
      'Reembolso transferencia fallida'
    );
    return depositMessage;
  }

  const transaction: Transaction = {
    amount: amount,
    currency: currency,
    transactionDate: Date.now(),
    transactionId: crypto.randomUUID(),
    transactionType: 'transfer',
    notes: notes,
  };

  const originCustomer = getCustomerById(originCustomerId);
  if (originCustomer) {
    const originAccount = getAccountById(originCustomer, originAccountId);
    if (originAccount) originAccount.transactions.push(transaction);
  }
  const destinationCustomer = getCustomerById(destinationCustomerId);
  if (destinationCustomer) {
    const destinationAccount = getAccountById(
      destinationCustomer,
      destinationAccountId
    );
    if (destinationAccount) destinationAccount.transactions.push(transaction);
  }
  return `Transferencia desde ${originAccountId} hacia ${destinationAccountId} por un monto de ${amount} completada exitosamente`;
}

const allCustomers: Customer[] = [];
allCustomers.push(esmerlyn);
allCustomers.push(eliRey);

console.log(createNewAccount(esmerlyn, 10000, 'savings', 'DOP'));
console.log(createNewAccount(esmerlyn, 600, 'checking', 'USD'));
console.log(createNewAccount(eliRey, 3001, 'checking', 'DOP'));
console.log(
  newTransaction(20000, '402-1012641-9', '64190001', 'DOP', 'deposit')
);
console.log(newTransaction(300, '402-0895929-2', '92920002', 'USD', 'deposit'));
console.log(
  newTransaction(
    500,
    '402-0895929-2',
    '92920001',
    'DOP',
    'deposit',
    'Palé 25 17'
  )
);
console.log(
  newTransaction(200, '402-0895929-2', '92920002', 'USD', 'withdrawal')
);
console.log(
  newTransaction(1200, '402-0895929-2', '92920002', 'USD', 'withdrawal')
);
console.log(
  transfer(
    '402-0895929-2',
    '402-1012641-9',
    '92920001',
    '64190001',
    150,
    'DOP',
    'Test Transfer'
  )
);
console.log(allCustomers);
