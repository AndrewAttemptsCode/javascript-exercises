const numberArray = [1, 2, 3, 4, 5];

const removeFromArray = function(array, ...nums) {
    let filteredArray = array.filter(item => { 
        for (let num of nums) {
            if (item === num) {
                return false;
            }
        }
        return true;
    });

    return filteredArray;
};

removeFromArray(numberArray, 2, 3);

// Do not edit below this line
module.exports = removeFromArray;
