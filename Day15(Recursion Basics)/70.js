/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n+1).fill(-1)
    return dpFn(n,dp)
};
const dpFn = (n,dp)=>{
    
    if(n < 0) return 0;
    if(n===0) return 1;
    if(dp[n] !== -1) return dp[n];
    return dp[n] = dpFn(n-1,dp) + dpFn(n-2,dp);
}

// shivankul ne kiya hai


