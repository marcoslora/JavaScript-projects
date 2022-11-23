//0-Alterna\ projects/01-fundamentos/23-OOP
//parseInt cambia de string a numero
//toString de numero a string
//padStart(number, '') a un string
//Json.jsinify
type ID = {
  idType: 'cedula' | 'pasaporte';
  value: string;
};
type Currency = 'DOP' | 'USD' | 'EUR';
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
  transctiononDate: number;
  amount: number;
  currency: Currency;
  transctionType: 'deposit' | 'withdrawal' | 'transfer';
  //Signo de interrogacion es para hacer opcional el tipo de dato
  destinationAccount?: string;
};
const eliDavidClient: Customer = {
  fullName: 'Eli David',
  id: { idType: 'cedula', value: '402-000000-0' },
  email: 'elidavid@email.com',
  phone: '829-455-1572',
  accounts: [],
};
const esmerlynClient: Customer = {
  fullName: 'Esmerlyn Ledesma',
  id: { idType: 'cedula', value: '402-000000-0' },
  email: 'elidavid@email.com',
  phone: '829-708-9989',
  accounts: [],
};
// function newAccount(
//   customer: Customer,
//   openingBalance: number,
//   accountType: Account['accountType'],
//   currency: Currency
// ): string {
//   switch (currency) {
//     case 'DOP':
//       if (openingBalance < 3000) {
//         return 'Error: El balance inicial debe ser mayor que RD$3,000.00';
//       }
//       break;
//     case 'USD':
//       if (openingBalance <= 60) {
//         return 'Error: El balance inicial debe ser mayor que Us$60.00';
//       }
//       break;
//   }
//   const calculateNewAccountNumber = () => {
//     const id = customer.id.value;
//     let firstFourDigits = '';
//     for (let i = 0; i < id.length - 5; i++) {
//       if (id[i] === '-') {
//         continue;
//       }
//       firstFourDigits += id[i];
//     }
//     const previusAccounts = customer.accounts;
//     if()
//     console.log(firstFourDigits);
//   };
//   calculateNewAccountNumber();
// }
