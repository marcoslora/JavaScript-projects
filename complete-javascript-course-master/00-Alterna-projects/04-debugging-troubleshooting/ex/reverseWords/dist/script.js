//No returnaban nada
function reverseWords(s) {
  return s
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

let input = "Let's reverse the words on this sentence";
console.log(input + ' => ' + reverseWords(input));

input = 'Up Down';
console.log(input + ' => ' + reverseWords(input));
