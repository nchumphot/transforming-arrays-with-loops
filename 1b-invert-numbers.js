function invertNumber(numbers) {
    let result = [];
    for (let number of numbers) {
        result.push(-number);  
    }
    return result;
}

console.log('invertNumber([0,1,2,3]):',invertNumber([0,1,2,3]),'should return [-0,-1,-2,-3].');
console.log('invertNumber([55,-12,43,-53]):',invertNumber([55,-12,43,-53]),'should return [-55,12,-43,53].');
console.log('invertNumber([9,34,-65,2]]):',invertNumber([9,34,-65,2]),'should return [-9,-34,65,-2].');