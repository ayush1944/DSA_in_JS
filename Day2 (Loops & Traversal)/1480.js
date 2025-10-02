/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr= [];
    let x = 0;
    for(let i = 0; i < nums.length ; i++){
        x = x + nums[i]
        arr.push(x);
    }
    return arr
};