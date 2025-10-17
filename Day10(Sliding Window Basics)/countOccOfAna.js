// User function Template for javascript

/**
 * @param {string} pat
 * @param {string} txt
 * @return {number}
 */

class Solution {
    search(pat, txt) {
        // code here
        let countS1 = new Array(26).fill(0);
        let countWin = new Array(26).fill(0);
        let count = 0;
        
        for(let i = 0; i<pat.length;i++){
            countS1[pat.charCodeAt(i) - 97]++;
            countWin[txt.charCodeAt(i) - 97]++;
        }
        
        const matches = ()=>{
            for(let i = 0; i<26; i++){
                    if (countS1[i] !== countWin[i]) return false;
            }
            return true;
        }
        
        if (matches()) count++;
        
        for (let i = pat.length; i < txt.length; i++) {
        countWin[txt.charCodeAt(i) - 97]++;
        countWin[txt.charCodeAt(i - pat.length) - 97]--;

        if (matches()) count++;
    }
        
        return count;
    }
}