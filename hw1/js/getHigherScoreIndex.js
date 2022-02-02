// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---

function getHighestScoreIndex(arr) {
    let max = arr[0];
    let maxIndex;

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (number >= max) {
            max = number;
            maxIndex = i;
        }

    }
    return (maxIndex)
}

let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

let maxIndex = getHighestScoreIndex(scores)
console.log(`${students[maxIndex]} has the higest score ${scores[maxIndex]}`);

// expected output
// Maria has the higest score: 6
