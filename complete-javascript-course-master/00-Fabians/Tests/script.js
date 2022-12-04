let details = [
  {
    customerName: 'Chris',
    customerAge: 32,
  },
  {
    customerName: 'David',
    customerAge: 26,
  },
  {
    customerName: 'Bob',
    customerAge: 29,
  },
  {
    customerName: 'Carol',
    customerAge: 25,
  },
];
const Newdetails = details.forEach(e => {
  delete e.customerName;
  delete e.customerAge;
  console.log(e);
});
//console.log(Newdetails);
