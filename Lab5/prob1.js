
function sum(array) {
    const sum = array
        .filter(e => e > 20)
        .reduce((accum, present) => accum + present, 0)
    return sum;
}

const numberArray = [10, 2, 25, 35, 50, 90, 100, 110];
const result = sum(numberArray)
console.log(result)

