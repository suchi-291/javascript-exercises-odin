const leapYears = function(year) {
    let centuryYear;
    
    if(year%100 === 0){
        centuryYear = year;
        return (centuryYear%400 === 0 || false);
    }else
    return (year%4 === 0 || false);
};

// Do not edit below this line
module.exports = leapYears;
