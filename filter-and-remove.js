/*Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
removes from it all values except those that are between a and b. 
The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/

//my answer
function filterRange(arr, a, b) {
    let itemsToKeep = arr.filter(number => (number >= a && number <= b));
    arr.length = 0; //clears array
    arr.push(...itemsToKeep); //combines arrays
}

//correct answer
function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {

        if(arr[i] < a || arr[i] > b) {
            arr.splice(i, 1); //removes 5 and 8 with .splice(startIndex, deletCount) syntax
            i--; //when the 5 (or 8) is removed, we need to shift the index back (i--) before we can move forward in the loop (i++)
        }
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);