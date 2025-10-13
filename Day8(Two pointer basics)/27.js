/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0,count=0;
    while(i<nums.length){
        if(nums[i]===val){
            nums[i]= -1;
            count++
        }
        i++
    }
    nums.sort((a,b)=>a-b);
    nums.reverse();
    for(let j = 0;j<count;j++){
        nums.pop()
    }
};