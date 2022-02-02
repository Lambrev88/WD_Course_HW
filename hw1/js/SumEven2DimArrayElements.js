// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(arr) {
    result = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 === 0) {
                result += array[i][j]
            }
        }
    }
    return result
}

// TEST:
let array = [
    [1, 2, 3],
    [4, 5, 6]
];

let sum = SumEven2DimArrayElements(array);
console.log(`sum = ${sum}`);

// expected output: 12