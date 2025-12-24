/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements 
with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/

function filterRange(arr, a, b) {
    return arr.filter(number => number >= a && number <= b);
}

let arr = [5, 3, 8, 1];
let filteredArray = filterRange(arr, 1, 4);

console.log(filteredArray);