'use strict';

function removeCharacters(input, charactersToRemove) {
    let result = '';

    for (let char of input) {
        if (char === ' ' || !charactersToRemove.includes(char)) {
            result += char;
        }
    }
    return result;
}


const input = prompt('Введіть вихідний рядок');
const charactersToRemove = prompt('Введіть символи для видалення').split('');
const result = removeCharacters(input, charactersToRemove);
alert(`Результат: ${result}`);
console.log(result);
