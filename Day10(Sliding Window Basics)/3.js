/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0; 
  let len = 0; 
  let seen = new Set();

  for(let right = 0; right<s.length; right++){
    while(seen.has(s[right])){
        seen.delete(s[left]);
        left++
    }

    seen.add(s[right])
    len = Math.max(len, right - left + 1)
  }  

  return len
};