function flipTheSign(n) {
    return -n;
}

function invertNumber(numbers) {
    return numbers.map(flipTheSign);
}

console.log('invertNumber([0,1,2,3]):',invertNumber([0,1,2,3]),'should return [-0,-1,-2,-3].');
console.log('invertNumber([55,-12,43,-53]):',invertNumber([55,-12,43,-53]),'should return [-55,12,-43,53].');
console.log('invertNumber([9,34,-65,2]]):',invertNumber([9,34,-65,2]),'should return [-9,-34,65,-2].');