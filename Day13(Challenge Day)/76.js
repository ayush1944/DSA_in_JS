var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    let mapT = new Map();
    for (let char of t) {
        mapT.set(char, (mapT.get(char) || 0) + 1);
    }

    let left = 0;
    let right = 0;
    let mapWindow = new Map();
    let have = 0;
    let need = mapT.size;

    // Result window: [start index, end index], and its length
    let result = [-1, -1];
    let minLength = Infinity;

    while (right < s.length) {
        let char = s[right];
        mapWindow.set(char, (mapWindow.get(char) || 0) + 1);

        if (mapT.has(char) && mapWindow.get(char) === mapT.get(char)) {
            have++;
        }

        // While window has all required characters
        while (have === need) {
            // Update result if this window is smaller
            if ((right - left + 1) < minLength) {
                result = [left, right];
                minLength = right - left + 1;
            }

            // Shrink the window from the left
            let leftChar = s[left];
            mapWindow.set(leftChar, mapWindow.get(leftChar) - 1);

            if (mapT.has(leftChar) && mapWindow.get(leftChar) < mapT.get(leftChar)) {
                have--;
            }
            left++;
        }

        right++;
    }
    console.log(s.slice(result[0], result[1] + 1).length)
    return minLength === Infinity ? "" : s.slice(result[0], result[1] + 1);
};
