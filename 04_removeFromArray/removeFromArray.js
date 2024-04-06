const numberArray = ["hey", 2, 3, "ho"];

const removeFromArray = function(array, ...nums) {
    let filteredArray = array.filter(item => { 
        for (let num of nums) {
            if (item === num) {
                return false; // Exclude the item
            }
        }
        return true; // Keep the item
    });

    return filteredArray;
};

removeFromArray(numberArray, "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
