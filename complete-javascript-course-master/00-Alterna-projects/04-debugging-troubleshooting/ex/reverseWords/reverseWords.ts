/*
Given a string s, reverse the order of characters in each word within a sentence 
while still preserving whitespace and initial word order.

Example 1:
  Input: s = "Let's reverse the words on this sentence"
  Output: "s'teL esrever eht sdrwod no siht ecnetnes"

Example 2:
  Input: s = "Up Down"
  Output: "pU nwoD"
 
Constraints:
  * 1 <= s.length <= 5 * 104
  * s contains printable ASCII characters.
  * s does not contain any leading or trailing spaces.
  * There is at least one word in s.
  * All the words in s are separated by a single space.
*/

function reverseWords(s: string) {
  s.split(' ')
          .map(word => 
            word.split('').reverse().join('')
          ).join(' ');
}

let input = "Let's reverse the words on this sentence";
console.log(input + ' => ' + reverseWords(input));

input = 'Up Down';
console.log(input + ' => ' + reverseWords(input));