/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let j = 0;
    for(let i =1; i < nums.length;i++){
        if(nums[j] !== nums[i]){
            j++;
            nums[j] = nums[i] // overwrite
        }
    }
    let i = nums.length-1;
    while(i>j){
        nums.pop()
        i--;
    }
    return nums.length

    // let arr = [];
    // let j = 0;
    // arr.push(nums[0]);
    // for(let i =1; i< nums.length ; i++){
    //     if(arr[j] !== nums[i]){
    //         arr.push(nums[i]);
    //         j++
    //     }
    // }
    // console.log(arr.length);
    // return arr.length;
};