/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0, j = s.length -1;
    while(i < j){
        if(s[i] !== s[j]){
            const skipLeft = isSubPalindrome(i+1,j);
            const skipRight = isSubPalindrome(i,j-1);
            return skipLeft || skipRight;
        }
        i++;
        j--;
    }
    return true;

    function isSubPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
};