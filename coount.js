function countOccurrences(array, number) {
    let count = 0;
    for (const item of array) {
        if (item === number) {
            count++;
        }
    }
    return count;
}


let numbers = [5, 6, 11, 12, 98, 5];
let numberToFind = 5;
let count = countOccurrences(numbers, numberToFind);

console.log(`The number ${numberToFind} appears ${count} times in the array.`);
