'use strict'

function removeCharacters(input, charactersToRemove) {
    const inputArr = input.split('');

    const resultArr = inputArr.filter(char => !charactersToRemove.includes(char));

    return resultArr.join('');
}

const input = "hello world";
const charactersToRemove = ['l', 'd'];

console.log(removeCharacters(input, charactersToRemove));