/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    let arr1 = s1.split('').sort();

    let j = 0, i = 0;
    let check = [];
    while(j<s2.length){
        check.push(s2[j])
        if((j-i+1)<s1.length){
            j++
        } else if((j-i+1)=== arr1.length){
            if(arr1.join('') === [...check].sort().join('')) return true;
            check.shift();
            i++
            j++;
        }
    }
    return false;
};



/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let countS1 = new Array(26).fill(0);
    let countWin = new Array(26).fill(0);
    let aCharCode = 'a'.charCodeAt(0);

    for(let i =0; i<s1.length;i++){
        countS1[s1.charCodeAt(i)-aCharCode]++
        countWin[s2.charCodeAt(i)-aCharCode]++
    }


    const matches = () => {
        for (let i = 0; i < 26; i++) {
            if (countS1[i] !== countWin[i]) return false;
        }
        return true;
    }

    if (matches()) return true;

    for (let i = s1.length; i < s2.length; i++) {
        countWin[s2.charCodeAt(i) - aCharCode]++;
        countWin[s2.charCodeAt(i - s1.length) - aCharCode]--;

        if (matches()) return true;
    }


    return false;
};