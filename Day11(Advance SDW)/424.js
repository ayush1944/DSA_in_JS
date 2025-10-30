/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let occ = new Array(26).fill(0);

    let l = 0;
    let maxCount = 0;
    let res = 0;

    for(let r = 0; r<s.length;r++){

        // count of occurance
        let char = s.charCodeAt(r) - 65;
        occ[char]++;

        // maximum count of occurance
        maxCount = Math.max(maxCount, occ[char]);

        // till window Size - maximum count of occurance is greater than k, reduce occurance
        while((r-l+1) - maxCount > k){
            occ[s.charCodeAt(l) - 65]--;
            l++
        }

        // return max of win size
        res = Math.max(res, r-l+1 );
    }
    return res;
};