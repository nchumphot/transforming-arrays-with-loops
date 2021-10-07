function lowercase(text) {
    return text.toLowerCase();
}

function lowercaseDomains(domains) {
    let result = domains.map(lowercase);
    return result;
}

// TEST CASES
console.log('lowercaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]):',lowercaseDomains(["academy.tech", "GITHUB.COM", "StackOverflow.com", "mOzIlLa.OrG"]),'should return ["academy.tech", "github.com", "stackoverflow.com", "mozilla.org"]');
