
const removeFromArray = function(arr,...rest ) {
    for(let i = 0; i < arr.length ; i++){
        for(let item of rest){
            //console.log(arr[i], item, arr);
            if (arr[i] === item){
                arr.splice(i,1);
                i = i-1;
            }
        }
    }

    return arr;
};




// Do not edit below this line
module.exports = removeFromArray;
