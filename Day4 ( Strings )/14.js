/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = strs.sort();
    pre = [];
    let start = strs[0], end = strs[strs.length -1];
    if( start.length >= end.length ){
        for(let i = 0;i< end.length; i++){
            if(start[i] === end[i]){
                pre.push(start[i]);
            } else {
                break;
            }
        }
    } else {
        for(let i = 0;i< start.length; i++){
            if(start[i] === end[i]){
                pre.push(start[i]);
            } else {
                break;
            }
        }
    }
    return pre.join('');
};