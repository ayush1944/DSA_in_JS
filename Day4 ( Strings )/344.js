/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // let j = s.length -1;
    // for(let i = 0; i < s.length/2; i++){
    //     let temp = s[i];
    //         s[i] = s[j];
    //         s[j] = temp;
    //     j--;
    // }
    // return s
    // return s.reverse();
    for(let i = 0; i< s.length/2;i++){
        let temp = s[i];
            s[i] = s[s.length-1-i];
            s[s.length-1-i] = temp;
    }
    return s
};