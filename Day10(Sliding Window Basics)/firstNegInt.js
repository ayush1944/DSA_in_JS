class Solution {
    firstNegInt(arr, k) {
        let res = [];
        let win = [];
        let store = [];
        
        // intialise window
        for(let i = 0;i<k;i++){
            win.push(arr[i])
        }
        
        // push copy of win array to the store array by using slice.
        store.push(win.slice());
        
        // pushing all subarray aka windows to store
        for(let i = k;i<arr.length;i++){
            win.push(arr[i])
            win.shift();
            store.push(win.slice());
        }
        
        // check for negative 
        for (let j = 0; j < store.length; j++) {
            let found = false;
            for (let i = 0; i < store[j].length; i++) {
                if (store[j][i] < 0) {
                    res.push(store[j][i]);
                    found = true;
                    break;
                }
            }
            if (!found) {
                res.push(0);
            }
        }
        
        
        return res;
    }
}


class Solution {
    firstNegInt(arr, k) {
        // write code here
        let i = 0, j = 0; 
        let queue = [];
        let res = [];
        while(j < arr.length){
            if(arr[j]<0) queue.push(arr[j]);
            
            if((j-i+1)<k) {
                j++;
            } else if ((j-i+1)===k){
                if(queue.length>0) {
                    res.push(queue[0])
                } else {
                    res.push(0)
                }
                if (arr[i] === queue[0]) {
                    queue.shift();
                }
                i++
                j++;
            }
        }
        return res;
    }
}