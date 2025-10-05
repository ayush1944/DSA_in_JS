/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = [];
    for(let i of s){
        if(/[a-zA-Z0-9]/.test(i)){
            arr.push(i.toLowerCase())
        }
    }
    for(let i = 0; i<arr.length/2;i++){
        if(arr[i] != arr[arr.length-1-i]) return false;
    }
    return true;
};