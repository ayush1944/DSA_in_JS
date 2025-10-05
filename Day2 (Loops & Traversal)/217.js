/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // nums = nums.sort();
    // for(let i = 1; i < nums.length;i++){
    //     if(nums[i-1] === nums[i]) return true;
    // }
    // return false;

    // let num_set = new Set();
    // for(let i = 0; i< nums.length; i++){
    //     if (num_set.has(nums[i])){
    //         return true;
    //     } else {
    //         num_set.add(nums[i]);
    //     }
    // }
    // console.log(num_set)
    // return false;

    let num_set = new Set(nums);
    return num_set.size < nums.length;
};