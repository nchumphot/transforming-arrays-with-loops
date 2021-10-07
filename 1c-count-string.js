function countString(words) {
    let result = [];
    for (let word of words) {
        result.push(word.length);
    }
    return result;
}

console.log('countString(["hello","world"]):',countString(["hello","world"]),'should return [5,5].');
console.log('countString(["one", "two", "three", "four"]):',countString(["one", "two", "three", "four"]),'should return [3,3,5,4].');