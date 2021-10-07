function numberAndString(numbers) {
    let result = [];
    for (let number of numbers) {
        let obj = {};
        obj.asNumber = number;
        obj.asString = number.toString()
        result.push(obj);
    }
    return result;
}

console.log('numberAndString([1,4,-3.2,5.8]):',numberAndString([1,4,-3.2,5.8]),`should return[
    { asNumber: 1, asString: '1' },
    { asNumber: 4, asString: '4' },
    { asNumber: -3.2, asString: '-3.2' },
    { asNumber: 5.8, asString: '5.8' }
  ]`);