// Soal 3
function findMissingNum(arr, n) {
    let totalSum = (n * (n + 1)) / 2;
    let sumOfArray = 0;

    for (let i of arr) {
        sumOfArray += i;
    }

    return totalSum - sumOfArray;
}

const num = [9, 6, 4, 2, 3, 5, 7, 0, 1]

let missedNum = findMissingNum(num, num.length);
console.log(missedNum)