/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length ) return false;

    let arrS = [], arrT = [];
    for(let i =0; i < s.length; i++){
        arrS.push(s[i]);
    }
    for(let i =0; i < t.length; i++){
        arrT.push(t[i]);
    }
    arrS.sort(), arrT.sort();
    for(let i = 0; i < arrS.length; i++){
        if(arrS[i] !== arrT[i]) return false;
    }
    return true;
};