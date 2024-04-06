const numberArray = [1, 2, 3, 4, 5];

const removeFromArray = function(array, num) {
    let filteredArray = array.filter(item => item !== num);
    return filteredArray;
};

removeFromArray(numberArray, 3);

// Do not edit below this line
module.exports = removeFromArray;
