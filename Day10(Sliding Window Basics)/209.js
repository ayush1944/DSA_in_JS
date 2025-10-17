/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0, minSize = Infinity;
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];

        while (sum >= target) {
            minSize = Math.min(minSize, j - i + 1);
            sum -= nums[i];
            i++;
        }
    }

    return minSize === Infinity ? 0 : minSize;
};
