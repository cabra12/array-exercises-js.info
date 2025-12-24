//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelizeWithForLoop(str) {
    let varOne = str.split("-");

    for(let i = 1; i < varOne.length; i++) {
        varOne[i] = varOne[i].charAt(0).toUpperCase() + varOne[i].slice(1);
    }

    return varOne.join("");
}

function camelizeWithMapMethod(str) {
    return str
        .split("-")
        .map((word, index) => {
            if(index === 0) {
                return word;
            }else{
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
        })
        .join("");
}

console.log(camelizeWithMapMethod("apple-banana-mango"));