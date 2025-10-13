/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
    let sum = 0;
    for(let i = s.length -1; i >= 0;i--){
        
        // for 4 and 9
        if(s[i] === "I"){
            if(s[i+1] === "V" || s[i+1] === "X"){
                sum = sum -1;
                continue;
            }
        }
        // for 40 and 50
        if(s[i] === "X"){
            if(s[i+1] === "L" || s[i+1] === "C"){
                sum = sum -10;
                continue;
            }
        }
        // 400 and 900
        if(s[i] === "C"){
            if(s[i+1] === "D" || s[i+1] === "M"){
                sum = sum -100;
                continue;
            }
        }
    sum = sum + romanMap[s[i]]
    }
    return sum;
};