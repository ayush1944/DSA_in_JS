/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
  maxSubarraySum(arr, k) {
    if (k === 0 || k > arr.length) return 0;

    // Initial window sum
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += arr[i];
    }
    // Slide the window
    let maxSum = sum;
    if (k === arr.length) {
      return sum;
    } else {
      for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, sum);
      }
    }
    return maxSum;
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSubarraySum(arr, k) {
        let i=0,j = 0;
        let sum = 0,maxSum = 0;
        while(j<arr.length){
            
            sum += arr[j]
            
            if((j-i+1)=== k){
                maxSum = Math.max(sum , maxSum);
                sum -= arr[i];
                i++
            }
            j++
        }
        return maxSum;
    }
}
