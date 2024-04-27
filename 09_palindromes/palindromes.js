const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    
    const cleanedString = str
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join("");

    const reverse = cleanedString.split("").reverse().join("");

    return cleanedString === reverse;
};

// Do not edit below this line
module.exports = palindromes;
