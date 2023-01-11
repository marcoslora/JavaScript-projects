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

// const copyItems: string[] = [];
// noFormatText.forEach(str => {
//   copyItems.push(str.charAt(0).toUpperCase() + str.slice(1));
// });
// console.log(copyItems.join(' '));
function capitalizeWords(sentence: string): string {
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].toUpperCase().charAt(0) + words[i].slice(1).toLowerCase();
  }

  const result = words.join(' ');

  return result;
}

const mySentence = 'alterna academy is an awesome resource';

console.log(capitalizeWords(mySentence));
