const sumAll = function(min, max) {
    let sum = 0;
    let temp;
    if(min > max){
        temp = min;
        min = max;
        max = temp;
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    for(let i = min ; i <= max ; i++){
        sum += i;
    }

    return sum;
};

//console.log(sumAll(1, 4000));
// Do not edit below this line
module.exports = sumAll;
