function onlyInitials(fullNames) {
    let result = [];
    for (let fullname of fullNames) {
        let names = fullname.split(' ');
        let firstInitial = names[0][0].toUpperCase();
        let lastInitial = names[1][0].toUpperCase();
        result.push(`${firstInitial}.${lastInitial}.`);
    }
    return result;
}

console.log('onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]):',onlyInitials(["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"]),'should return ["A.K.", "L.H.", "Y.M."].');