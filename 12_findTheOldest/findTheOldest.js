const findTheOldest = function(array) {
    const date = new Date().getFullYear();

    return array.reduce((oldest, current) => {
        const ageOldest = (oldest.yearOfDeath || date) - oldest.yearOfBirth;
        const ageCurrent = (current.yearOfDeath || date) - current.yearOfBirth;
        return ageOldest > ageCurrent ? oldest : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
