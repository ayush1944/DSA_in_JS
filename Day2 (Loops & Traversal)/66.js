/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let temp = 0;
    for(let i = 0; i< digits.length;i++){
        temp = temp * 10 + digits[i]
    }
    temp = temp + 1;
    console.log(temp)
    let arr = [];
    while(temp>0){
        let x = temp%10;
        temp = Math.floor(temp/10);
        arr.push(x)
    }
    return arr.reverse()

    
    // let arr = JSON.parse(JSON.stringify(digits)); // deep copy
    // let x = arr.pop() + 1;
    // arr.push(x);
    // return arr
};