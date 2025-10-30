/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let i = 0; 
    let map = new Map();
    let pick = 0;
    for(let j = 0; j< fruits.length; j++){
        if(map.has(fruits[j])){
            map.set(fruits[j], map.get(fruits[j]) + 1);
        } else {
            map.set(fruits[j], 1);
        }
        while(map.size > 2){
            map.set(fruits[i], map.get(fruits[i])-1)
            if(map.get(fruits[i])=== 0) map.delete(fruits[i])
            i++;
        }
        pick = Math.max(pick, j-i+1)
    }
    return pick
};