// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var sortedSquares = function(nums) {
//     let arr = [];
//     for(let i = 0; i< nums.length; i++){
//         arr.push(nums[i]*nums[i])
//     }
//     return arr.sort((a,b)=> a - b);
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = new Array(nums.length).fill(0);
    let left = 0, right = nums.length-1;

    for(let i = nums.length -1; i >= 0; i--){
        if(Math.abs(nums[left])>Math.abs(nums[right])){
        arr[i]= nums[left] ** 2;
        left ++;
        } else {
            arr[i] = nums[right] ** 2;
            right --;
        }
    }
    return arr;
};