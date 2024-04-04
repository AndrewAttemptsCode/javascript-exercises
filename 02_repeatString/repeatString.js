const repeatString = function(string, num) {
    let repeatString = "";

    if (num < 0) {
        repeatString = "ERROR";
    }

    for (i = 0; i < num; i++) {
        repeatString += string;
    }
    return repeatString;
};

repeatString("hey", -1);

// Do not edit below this line
module.exports = repeatString;
