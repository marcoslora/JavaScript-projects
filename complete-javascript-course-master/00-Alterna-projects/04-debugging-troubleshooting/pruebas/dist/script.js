"use strict";
////00-Alterna-projects/04-debugging-troubleshooting/pruebas
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i > 0; i--) {
        num = num * i;
    }
    return num;
}
console.log(factorial(5));
function factorial1(num) {
    let result = 0;
    for (let i = num - 1; i > 0; i--) {
        result = num *= i;
    }
    return result;
}
console.log(factorial1(5));
