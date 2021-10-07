function addHello(name) {
    return `Hello, ${name}!`;
}

function hello(names) {
    return names.map(addHello);
}

// TEST CASES
console.log('hello(["Ash", "Beth", "Ciara"]):',hello(["Ash", "Beth", "Ciara"]),'should return ["Hello, Ash!", "Hello, Beth!", "Hello, Ciara!"]');