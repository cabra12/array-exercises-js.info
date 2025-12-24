/* We have an array of strings arr. 
We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.

*/
function copySorted(arr) {
    return [...arr].sort(); 
}

let arr = ["HTML", "JavaScript", "CSS"];
let newArray = copySorted(arr);
console.log(newArray);
console.log(arr);