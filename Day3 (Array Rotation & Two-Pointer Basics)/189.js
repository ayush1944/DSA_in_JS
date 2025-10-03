/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let arr = [];
    if( k > nums.length){
        k = k % nums.length;
    }
    if( k === nums.length){
        k = 0;
    }

    while( k > 0){
        let x = nums.pop();
        arr.push(x);
        k--;
    }
    nums = nums.reverse();
    arr = arr.reverse()
    let l = arr.length
    for( let i = 0; i < l; i++){
        let x = arr.pop();
        nums.push(x)
    }
    nums = nums.reverse();
};