/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = ['a','e','i','o','u','A','E','I','O','U'];
    let map = new Map();
    for(let i =0; i<arr.length;i++){
        map.set(arr[i],i)
    }
    let arrS = [];
    for(let i =0; i<s.length;i++){
        arrS[i] = s[i]
    }
    let i = 0, j = s.length -1;
    while(i<j){
        if(!map.has(arrS[i])){
            i++;
        } 
        if(!map.has(arrS[j])){
            j--;
        }
        if(map.has(arrS[i]) && map.has(arrS[j])){
            let temp = arrS[i];
                arrS[i] = arrS[j];
                arrS[j] = temp;
                i++;
                j--;
        }
    }
    return arrS.join('');
};