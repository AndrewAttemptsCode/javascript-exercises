const repeatString = function(string, num) {
    let repeatString = "";

    if (num < 0) {
        repeatString = "ERROR";
    }

    for (let i = 0; i < num; i++) {
        repeatString += string;
    }
    return repeatString;
};

const number = Math.floor(Math.random() * 1000)

repeatString("", number);

// Do not edit below this line
module.exports = repeatString;
