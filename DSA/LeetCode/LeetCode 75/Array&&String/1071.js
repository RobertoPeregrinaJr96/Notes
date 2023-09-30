
/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// Helper function
const isValidate = (w, str) => {
    if (str.length == 0) return true;
    if (!str.startsWith(w)) return false;
    return isValidate(w, str.slice(w.length))
}


var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 != str2 + str1) return '';

    let res = ''

    for (let i = 1; i <= str1.length; i++) {
        let curV = str1.slice(0, i)
        if (isValidate(curV, str2) && isValidate(curV, str1)) res = curV;
    }

    return res;
};

gcdOfStrings('ABCABC', 'ABC')
gcdOfStrings('CBAABC', 'ABC')

/*
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""


Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

*/
