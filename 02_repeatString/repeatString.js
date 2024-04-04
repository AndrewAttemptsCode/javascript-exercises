const repeatString = function(string, num) {
    let repeatString = "";
    for (i = 0; i < num; i++) {
        repeatString += string;
    }
    return repeatString;
};

repeatString("hey", 0);

// Do not edit below this line
module.exports = repeatString;
