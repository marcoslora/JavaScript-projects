"use strict";
//0-Alterna\ projects/01-fundamentos/Banco-OOP
//parseInt cambia de string a numero
//toString de numero a string
//padStart(number, '') a un string
//Json.jsinify
const eliRey = {
    fullName: 'Eli Rey David',
    id: { idType: 'cedula', value: '402-1012641-9' },
    email: 'edj617@gmail.com',
    phone: '829-455-1572',
    accounts: [],
};
const esmerlyn = {
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
function createNewAccount(customer, openingBalance, accountType, currency) {
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
            const lastAccountNumber = previousAccounts[previousAccounts.length - 1].accountNumber;
            const prevFourDigits = lastAccountNumber.slice(lastAccountNumber.length - 4);
            const newNumber = parseInt(prevFourDigits) + 1;
            lastFourDigits = newNumber.toString().padStart(4, '0');
        }
        else {
            lastFourDigits = '0001';
        }
        return firstFourDigits + lastFourDigits;
    };
    const newAccount = {
        accountNumber: calculateNewAccountNumber(),
        accountType: accountType,
        currency: currency,
        balance: openingBalance,
        transactions: [],
    };
    customer.accounts.push(newAccount);
    return `Cuenta creada exitosamente - Número: ${newAccount.accountNumber} - Moneda: ${newAccount.currency} - Balance: ${newAccount.balance}`;
}
/*
  1. Buscar el cliente. Verificar que el cliente existe
  2. Buscar la cuenta. Verificar que la cuenta existe.
  3. Verificar la moneda de la cuenta a ver si son iguales
  3.1 Si no lo son, entonces devolver error
  4. Aumentar el balance de la cuenta con el monto del depósito
  5. Almacenar la transacción en la cuenta del cliente.
  6. Devolver un mensaje con el nuevo balance de la cuenta
  */
function newDeposit(amount, customerId, accountNumber, currency) {
    /* TODO NEXT CLASS */
}
const allCustomers = [];
allCustomers.push(esmerlyn);
allCustomers.push(eliRey);
console.log(createNewAccount(esmerlyn, 10000, 'savings', 'DOP'));
console.log(createNewAccount(esmerlyn, 600, 'checking', 'USD'));
