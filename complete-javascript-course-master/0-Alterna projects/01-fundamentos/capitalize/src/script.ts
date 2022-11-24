const noFormatText: string[] = 'alTErNa AcaDEMy eS lo MEJOR'
  .toLocaleLowerCase()
  .split(' ');

function capitalize(str: string): string {
  //charAt atrapa el index de cada letra del string
  //slice captura de ese en adelante
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const copyItems: string[] = [];
noFormatText.forEach(str => {
  copyItems.push(capitalize(str));
});
console.log(copyItems.join(' '));

// const capitalizeString = noFormatText.split(' ').map(capitalize).join(' ');
// console.log(capitalizeString);
