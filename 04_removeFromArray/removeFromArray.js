const numberArray = ["hey", 2, 3, "ho"];

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

removeFromArray(numberArray, "hey", 3);

// Do not edit below this line
module.exports = removeFromArray;
