// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function(nums1, nums2) {  
//     return nums1.filter(val => nums2.includes(val) && nums2.splice(nums2.indexOf(val), 1));
// }; 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {  
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=> a-b);
    let i=j=0;
    const result = [];
    while(i < nums1.length && j < nums2.length){
        if(nums1[i]<nums2[j]){
            i++
        }
        else if(nums1[i]>nums2[j]){
            j++
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    return result;
};