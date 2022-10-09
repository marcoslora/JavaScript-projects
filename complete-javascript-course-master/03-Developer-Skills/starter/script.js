// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// 18745
const kath = 23;
if (kath === 23) console.log(kath);
// Arrow function
const calcAge = birthYear => 2022 - birthYear;
console.log(calcAge(1992));
console.log(calcAge(1992));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// console.log(Math.max(...temperatures));
// console.log(Math.min(...temperatures));

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 4, 4, 5, 8], [7, 9, 5, 7, 8]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measuremente = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
    // value: Number(prompt('Degrees celsius: ')),
  };
  //   console.table(measuremente);
  //   console.warn(measuremente.value);
  //   console.error(measuremente.value);
  const kelvin = measuremente.value + 273;
  return kelvin;
};
console.log(measureKelvin());

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('... ' + str);
};
printForecast(data1);
