/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let res = [];
    let countP = new Array(26).fill(0);
    let countW = new Array(26).fill(0);
    let left = 0;


    for(let i =0; i<p.length;i++){
        countP[p.charCodeAt(i) - 97]++;
        countW[s.charCodeAt(i) - 97]++;
    }

    const matches = ()=>{
        for(let j = 0; j<countP.length;j++){
            if(countP[j] !== countW[j]) return false;
        }
        return true;
    }

    if(matches()) res.push(0);

    for(let right = p.length; right<s.length;right++){
        countW[s.charCodeAt(right) - 97]++;
        countW[s.charCodeAt(right - p.length) - 97]--;
        
        if (matches()) res.push(right - p.length + 1);  
    }

    console.log(countP, countW)
    return res;
};