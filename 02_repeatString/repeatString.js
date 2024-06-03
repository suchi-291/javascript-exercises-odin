const repeatString = function(str, num) {
let outputVal = '';
if(num > 0){
for( let i = 0; i < num ; i++){
    outputVal += str;
}

}else if(num === 0){
    outputVal = '';
}else{
    outputVal = 'ERROR';
}

return outputVal;
};


// Do not edit below this line
module.exports = repeatString;
