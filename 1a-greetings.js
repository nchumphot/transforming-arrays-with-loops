function hello(names) {
    let result = [];
    for (let name of names) {
        result.push(`Hello, ${name}!`);
    }
    return result;
}

// TEST CASES
console.log('hello(["Ash", "Beth", "Ciara"]):',hello(["Ash", "Beth", "Ciara"]),'should return ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]');