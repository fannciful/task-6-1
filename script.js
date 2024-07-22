'use strict';
function removeCharacters(input, charactersToRemove) {
    const inputArr = input.split('');
    const resultArr = inputArr.filter(char => !charactersToRemove.includes(char));
    return resultArr.join('');
}

const userInput = prompt('Введіть вихідний рядок');

if (userInput === null) {
    alert('You canceled!');
} else if (!userInput.trim()) {
    alert('You have entered nothing!');
} else {
    const charactersToRemoveInput = prompt('Введіть символи для видалення');
    
    if (charactersToRemoveInput === null || !charactersToRemoveInput.trim()) {
        alert('No characters to remove!');
    } else {
        const charactersToRemove = charactersToRemoveInput.split('').filter(char => char.trim() !== '');

        const result = removeCharacters(userInput, charactersToRemove);
        alert(`Результат: ${result}`);
        console.log(result);
    }
}
