/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let product = 1;
  let count = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    // shirinking condition
    while (product >= k && left <= right) {
      product /= nums[left];
      left++;
    }
    // this will also count the subarray of subarrays
    count += right - left + 1;
  }
  return count;
};
