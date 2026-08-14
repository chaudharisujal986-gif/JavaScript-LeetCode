/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let freq = {};
    let left = 0;
    let ans =0;

    for (let right = 0; right < s.length; right++) {
        let ch = s[right];

        freq[ch] = (freq[ch] || 0) + 1;

        while (freq[ch] > 2) {
            freq[s[left]]--;
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};