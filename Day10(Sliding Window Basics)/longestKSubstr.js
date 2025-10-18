/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestKSubstr(s, k) {
        let i =0; 
        let map = new Map();
        let maxLen = -1;
        
        for(let j = 0; j<s.length; j++){
                map.set(s[j], (map.get(s[j]) || 0) + 1);
                while(map.size > k){
                    map.set(s[i], map.get(s[i])-1);
                    if(map.get(s[i]) === 0){
                        map.delete(s[i]);
                    }
                    i++
                }
                if(map.size === k){
                    maxLen = Math.max(maxLen,j-i+1)
                }

        }
        return maxLen;
    }
}
