/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let arr = [];
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] !== 0 ) arr.push(nums[i])
    // }
    //     for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === 0 ) arr.push(nums[i])
    // }
    // nums = arr;
    // console.log(nums)
    // return nums;

    let i = 0, j = 0;

    while (i < nums.length) {
        if (nums[i] !== 0) {
            if (i !== j) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
            j++; 
        }
        i++;
    }

    return nums;
};
