/* function: return lowercase of strings in an array
=======================
name: returnLowercase
parameter NAMES: Array<string>
return RESULT: Array<string>
=======================
pseudocode:
create an empty array named RESULT
for each NAME in NAMES:
    add lowercase version of NAME in RESULT
return RESULT
*/

// JAVASCRIPT IMPLEMENTATION
function returnLowercase(names) {
    let result = [];
    for (let name of names) {
        result.push(name.toLowerCase());
    }
    return result;
}

// TEST CASES
console.log('returnLowercase(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]):',returnLowercase(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),'should return ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]');
